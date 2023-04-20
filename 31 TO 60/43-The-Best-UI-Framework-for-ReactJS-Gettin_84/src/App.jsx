import React from "react";
import { useState } from "react";
import Todolist from "./Todolist";


const App = () => {
    const [inputText, setInputText] = useState("");
    const [items, setItems] = useState([])


    const inputItems = (event) => {
        setInputText(event.target.value)
    }

    const onClick = () => {
        setItems((oldItems)=>{
            return[...oldItems, inputText]
        })
        setInputText("")
    }

    const deleteItems = (id) => {
        console.log("item deleted");

        setItems((oldItems) => {
            return oldItems.filter((elem, index)=>{
                    return index !== id;
            })
        })
    }


    return(
        <>
            <div className="div_main">
                <div className="div_card">
                    <br/>
                    <h1>ToDo List</h1>
                    <br/>
                    <input type="text" placeholder="Enter The Items" onChange={inputItems} value={inputText} />
                    <button onClick={onClick}> + </button>

                    <ol>
                        {items.map((val, index)=>{
                            return (
                                <Todolist
                                key={index}
                                id={index}
                                text={val}
                                onDel={deleteItems}
                                
                                />
                            )
                            
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
}

export default App;