import React, { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"



const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setitems] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [editItem, setEditItem] = useState(null)


  const addItems = () => {
    if (!inputData) {
      alert("plz fill data");
    } else if (inputData && !toggle) {
      setitems(
          items.map((curElem)=>{
            if(curElem.id === editItem ){
              return {...curElem, name: inputData}
            }
            return curElem
          })
      )
      setInputData("");
      setToggle(true);
      setEditItem(null);

    } else {
      const inputAllData = { id: new Date().getTime().toString(), name: inputData }
      setitems([...items, inputAllData]);
      setInputData('');
    }
  }


  // edit
  const editItems = (id) => {
    let newEditItem = items.find((curElem) => {
      return curElem.id === id
    })
    console.log(newEditItem);

    setInputData(newEditItem.name);
    setToggle(false);
    setEditItem(id);
  }




  // delete items
  const deleteItems = (index) => {
    const deleteAllItems = items.filter((curElem) => {
      return curElem.id !== index;
    })
    setitems(deleteAllItems);
  }

  return (
    <>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col" style={{ backgroundColor: "red", maxWidth: "55%" }}>
              <div className="card" id="list1" style={{ borderRadius: ".75rem", backgroundColor: "#eff1f2" }}>
                <div className="card-body py-4 px-4 px-md-5">

                  <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
                    <i className="fas fa-check-square me-1"></i>
                    <u>My Todo</u>
                  </p>

                  <div className="pb-2">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex flex-row align-items-center">
                          <input type="text" className="form-control form-control-lg" value={inputData} onChange={(e) => setInputData(e.target.value)} id="exampleFormControlInput1" placeholder="Add new..." />
                          {
                            toggle ? <button type="button" className="btn btn-primary" onClick={addItems} >Add</button> :
                              <button type="button" className="btn btn-primary" onClick={addItems} >Update</button>
                          }

                        </div>
                      </div>
                    </div>
                  </div>

                  <hr className="my-4" />
                  {
                    items.map((curElem) => {
                      return (
                        <div key={curElem.id}>
                          <ul className="list-group list-group-horizontal rounded-0 bg-transparent" >
                            <li className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                              <p className="lead fw-normal mb-0 bg-light w-100 ms-n2 ps-2 py-1 rounded">{curElem.name}</p>
                            </li>

                            <li className="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
                              <div className="d-flex flex-row justify-content-end mb-1">
                                <a href="#!" className="text-info" data-mdb-toggle="tooltip" onClick={() => editItems(curElem.id)} title="Edit todo" ><i
                                  className="fas fa-pencil-alt me-3"></i></a>

                                <a href="#!" className="text-danger" data-mdb-toggle="tooltip" onClick={() => deleteItems(curElem.id)} title="Delete todo"><i
                                  className="fas fa-trash-alt"></i></a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      )
                    })
                  }


                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Todo;