import DisplayList from './DisplayList'
import api from "./api/list"
const List = ({displayList, setDisplayList, search, setSearch, searchResult, setSearchResult,addText, setAddText}) => {
    
    const addList = async (addText) =>{
            const id =((displayList.length) ? ((displayList.length) + 1 ): 1);
            const newList =[...displayList, {id:id, task:addText, checked:false}]

            const response = await api.post('/list', newList)
            console.log(newList);
            setDisplayList(response.data);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        addList(addText);
        setAddText('');
    }
    return (
    <>
    <form className='addForm' onSubmit={(e)=>handleSubmit(e)}>
        <label className='addLabel'>Add List</label>
        <input  
            className='inputlist'
            type='text'
            required
            placeholder='Add a list'
            value={addText}
            onChange={(e)=> setAddText(e.target.value)}
        />
        <button
            type="submit"
        >+</button>
    </form>


    {/* Searching  */}
    <label className='searchLabel'>Search Items</label>
    <input 
        type='text'
        required
        placeholder='Search the list'
        onChange={(e)=>setSearch(e.target.value)}
        className='searchInput'
    />


    {/* Displaying List */}
    <ul>
        <li>{((displayList.length) ? (
        <DisplayList 
        displayList={displayList}
        setDisplayList={setDisplayList}/>):"List is Empty")}
        </li>
    </ul>
    </>
  )
}

export default List