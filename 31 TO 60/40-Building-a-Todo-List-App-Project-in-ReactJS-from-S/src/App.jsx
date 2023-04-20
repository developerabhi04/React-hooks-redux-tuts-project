import React, { useState } from "react";
import Todolist from "./Todolist";


const App = () => {

  const [inputList, setInputlist] = useState("");
  const [Items, setItems] = useState([]);

  
  const itemEvent = (event) => {
    setInputlist(event.target.value)
  }


  const onClick = (event) => {
    setItems((oldItems) => {
      return[
        ...oldItems,
        inputList
      ]
    })
    setInputlist("")
  }


  
  const deleteItems = (id) => {
    console.log("deleted");

    setItems((oldItems)=> {
      return oldItems.filter((arrElem, index)=>{
          return index !== id;
      })
    })

}

  return(
    <>
      <div className="div_main" >
        <div className="center_div">
          <br />
          <h1> ToDo List </h1>
          <br />
          <input type="text" placeholder="Add a Items"  onChange={itemEvent} value={inputList}/>
          <button onClick={onClick}> + </button>
          <ol>
           
              {Items.map((itemval, index) => {
                return (
                  <Todolist 
                key={index}  
                id={index}
                text={itemval}
                onSelect={deleteItems} 
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