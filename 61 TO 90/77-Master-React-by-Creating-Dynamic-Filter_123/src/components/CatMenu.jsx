import React from 'react'

const CatMenu = ({addCatgory, catItems}) => {
    return (
        <>
            <div className='menu-tabs container'>
                <div className="menu-tab d-flex justify-content-around">
                    {
                        catItems.map((curEle, index)=>{
                            return(
                                <button className='btn btn-warning' key={index} onClick={() => addCatgory(curEle)}>{curEle}</button>
                            )
                        })
                    }
                    
                    
                   
                </div>
            </div>
        </>
    )
}

export default CatMenu