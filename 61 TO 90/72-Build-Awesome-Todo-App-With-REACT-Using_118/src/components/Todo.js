import React, { useState } from 'react';
import todo from "./images/1738002.avif"

const Todo = () => {
    const[inputData, setInputData] = useState("");
    const[items, setItems] = useState([]);

    const addItem = () => {
        if(!inputData) {

        }else{
            setItems([...items, inputData])
            setInputData('')
        }
        
    }

    const deleteItem = (id) => {
        const updateditems = items.filter((elem, ind) => {
            return ind !== id;
        })

        setItems(updateditems);
    } 

    const removeAll = () => {
        setItems([]);
    }


  return (
    <>
        <div className='main-div'>
            <div className='child-div'>
                <figure>
                    <img src={todo} alt="todoLogo" />
                    <figcaption>Add Your List Here 👍</figcaption>
                </figure>
                    <div className='addItems'>
                        <input type="text" placeholder='Add items..' value={inputData} onChange={(e) => setInputData(e.target.value)} />
                        <i className="fa-solid fa-plus add-btn" onClick={addItem} title='Add Item'></i>
                    </div>
                <div className='showItems'>

                    {
                        items.map((curElem, ind)=>{
                            return(
                                <div className='eachItem' key={ind}>
                                   <h3>{curElem}</h3>
                                   <i className="fa-solid fa-plus add-btn" title='Delete Item' onClick={() => deleteItem(ind)}></i>
                                </div>
                            )
                        })
                    }
                    
                    
                    {/* clear all button */}
                    <div className='showitem'>
                        <button className='btn effect04' data-sm-link-text="Remove All" onClick={removeAll} ><span>Check List</span></button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Todo