import React, { useState } from 'react'
import Menu from './Menu'






// const allCatValues = new Set(Menu.map((ele)=>{
//     return ele.category
// }))



const GalleryReact = () => {
    const [items, setItems] = useState(Menu);

    const addCatgory = (cat) => {
        const allCategoryitems = Menu.filter((elem)=>{
            return( elem.category === cat )
        })
        setItems(allCategoryitems)
    }


    return (
        <>
            <h1 className='mt-5 text-center main-heading'>Order Your Favourite Dish</h1>
            <hr />

            <div className='menu-tabs container'>
                <div className="menu-tab d-flex justify-content-around">
                    <button className='btn btn-warning' onClick={()=>addCatgory("breakfast")}  >Breakfast</button>
                    <button className='btn btn-warning' onClick={()=>addCatgory("lunch")} >Lunch</button>
                    <button className='btn btn-warning' onClick={()=>addCatgory("evening")} >Evening</button>
                    <button className='btn btn-warning' onClick={()=>addCatgory("dinner")} >Dinner</button>
                    <button className='btn btn-warning' onClick={()=>setItems(Menu)} >All</button>
                </div>
            </div>

            {/* my main items section */}
            <div className='menu-item container-fluid mt-5'>
                <div className='row'>
                    <div className='col-11 mx-auto'>
                        <div className='row my-5'>
                            {
                                items.map((curElem) => {
                                    const { name, price, description, image } = curElem;
                                    return (
                                        <div className='item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5 '>
                                            <div className='row Item-inside'>
                                                <div className='col-12 col-md-12 col-lg-4 img-div'>
                                                    <img src={image} alt="kk" className='img-fluid' />
                                                </div>
                                                {/* menu items description */}
                                                <div className='col-12 col-md-12 col-lg-8'>
                                                    <div className='main-title pt-4 pb-3'>
                                                        <h1>{name}</h1>
                                                        <p>j{description}</p>
                                                    </div>
                                                    <div className='menu-price-book'>
                                                        <div className='price-book-divide d-flex justify-content-between'>
                                                            <h2>Price : {price} </h2>
                                                            <a href="/">
                                                                <button className='btn btn-primary'>Order Now</button>
                                                            </a>
                                                        </div>
                                                        <p>Price may vary on selected date.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GalleryReact;




// let a = ["1", "1", "2", "3", "3", "1"];
// let unique = a.filter((item, i, ar)=> ar.indexOf(item) === i);

// let a = new Set(["1", "1", "2", "3", "3", "1"])