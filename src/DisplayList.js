import React from 'react'
import { GoTrash } from "react-icons/go";
import api from "./api/list"

const DisplayList = ({displayList, setDisplayList}) => {
    const updateChecked = async (id) =>{
        const state=displayList.map((i)=> (i.id===id) ? {...i, checked:!i.checked} : i)

        const response = await api.post('/list', state)
        setDisplayList(response.data);
}
    const deleteList = async (id) =>{
        const setList = displayList.filter((i)=> (i.id!==id));
        const response = await api.post('/list', setList)
        setDisplayList(response.data);  
        
        console.log(id);   
    }
  return (
    <>
        {displayList.map((i)=>(
            <li>
                <input className='checkBox'
                    key={i.id}
                    type="checkbox"
                    checked={i.checked}
                    onChange={()=>updateChecked(i.id)}
                />
                <label> 
                   {i.task}
                </label>
                <GoTrash 
                className='trash' 
                role="button"
                tabIndex='0'
                onClick={()=>deleteList(i.id)}
                />
            </li>    
        ))}
    </>
  )
}

export default DisplayList