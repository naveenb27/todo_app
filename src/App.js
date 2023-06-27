import './App.css';
import Header from './Header';
import List from './List';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import api from "./api/list"

function App() {
  const [displayList, setDisplayList] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState('');
  const [addText, setAddText] = useState('')

  useEffect(() => {
    const fetchList = async () => {
      try{
        const respose = await api.get('/list');
        setDisplayList(respose.data);
      }catch(err){
        if(err.respose){
          console.log(err.respose.data);
        }else{
          console.log(`Error: ${err.message}`);
        }
      }
    }
  
    fetchList();
  },[]
  )

  return (
    <div className="App">
      <Header />
      <List 
        displayList={displayList}
        setDisplayList={setDisplayList}
        search={search}
        setSearch={setSearch}
        searchResult={searchResult}
        setSearchResult={setSearchResult}

        addText={addText}
        setAddText={setAddText}
      />
      <Footer />
    </div>
  );
}

export default App;
