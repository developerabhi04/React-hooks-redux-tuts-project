import React, { useState } from 'react';
import todo from "./images/1738002.avif"


// const getLocalItems = () => {
//     let list = localStorage.getItem('list');
//     console.log(list);

//     if(list) {
//         return JSON.parse(localStorage.getItem('lists'));
//     } else {
//         return[];
//     }
// }

// // add data to localStorage
// useEffect(() => {
//     localStorage.setItem('lists', JSON.stringify(items))
// },[items])


const Todo = () => {
    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState([]);
    const [toggleSubmit, setToggleSubmit] = useState(true);
    const [isEditItem, setEditItem] = useState(null);

    const addItem = () => {
        if(!inputData) {
            alert("plz fill the data");
        } else if(inputData && !toggleSubmit) {
            setItems(
                items.map((curElem)=> {
                    if (curElem.id === isEditItem){
                        return { ...curElem, name: inputData }
                    }
                    return curElem;
                })

             ) 
                setToggleSubmit(true);

                setInputData("");

                setEditItem(null);    

        }else{
            const allInputDate = { id: new Date().getTime().toString(), name: inputData }
            setItems([...items, allInputDate])
            setInputData('')
        }
        
    }



    const deleteItem = (index) => {
        const updateditems = items.filter((curElem) => {
            return index !== curElem.id;
        })

        setItems(updateditems);
    } 




    const removeAll = () => {
        setItems([]);
    }


    


    const editItem = (id) => {
        let newEditItem = items.find((curElem) => {
            return curElem.id === id
        })
        console.log(newEditItem);

        setToggleSubmit(false);

        setInputData(newEditItem.name);

        setEditItem(id);

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
                        {
                            toggleSubmit ?  <i className="fa-solid fa-plus add-btn" title='Add Item' onClick={addItem} ></i>  : 
                                    <i className="fa-solid fa-plus add-btn" title='Update Item' onClick={addItem} ></i>
                            
                            
                        }
                   </div>
                       
                <div className='showItems'>

                    {
                        items.map((curElem)=>{
                            return(
                                <div className='eachItem' key={curElem.id}>
                                   <h3>{curElem.name}</h3>
                                   <i className="fa-solid fa-plus add-btn" title='Edit Item' onClick={() => editItem(curElem.id)}></i>
                                   <i className="fa-solid fa-plus add-btn" title='Delete Item' onClick={() => deleteItem(curElem.id)}></i>
                                </div>
                            )
                        })
                    }

                    
                    {/* clear all button */}
                    <div className='showitem'>
                        <button className='btn effect04' data-sm-link-text="Remove All" onClick={removeAll} ><span>RemoveAll</span></button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Todo