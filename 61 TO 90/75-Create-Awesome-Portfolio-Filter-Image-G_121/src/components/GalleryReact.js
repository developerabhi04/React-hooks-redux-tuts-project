import React, { useState } from 'react'
import Menu from './Menu'


const GalleryReact = () => {
    const [items, setItems] = useState(Menu);

    const filterItem = (catItems) => {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === catItems;
        });
        setItems(updatedItems);
    }

    return (
        <>
            <h1 className='mt-5 text-center main-heading'>Order Your Favourite Dish</h1>
            <hr />

            <div className='menu-tabs container'>
                <div className="menu-tab d-flex justify-content-around">
                    <button className='btn btn-warning' onClick={() => filterItem('breakfast')}>Breakfast</button>
                    <button className='btn btn-warning' onClick={() => filterItem('lunch')} >Lunch</button>
                    <button className='btn btn-warning' onClick={() => filterItem('evening')} >Evening</button>
                    <button className='btn btn-warning' onClick={() => filterItem('dinner')} >Dinner</button>
                    <button className='btn btn-warning' onClick={() => setItems(Menu)}>All</button>
                </div>
            </div>

            {/* my main items section */}
            <div className='menu-item container-fluid mt-5'>
                <div className='row'>
                    <div className='col-11 mx-auto'>
                        <div className='row my-5'>
                            {
                                items.map((curElem) => {
                                    const {image, name, price, description } = curElem;

                                    return (
                                        <div className='item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5 '>
                                            <div className='row Item-inside'>
                                                <div className='col-12 col-md-12 col-lg-4 img-div'>
                                                    <img src={image} alt={name} className='img-fluid' />
                                                </div>
                                                {/* menu items description */}
                                                <div className='col-12 col-md-12 col-lg-8'>
                                                    <div className='main-title pt-4 pb-3'>
                                                        <h1>{name}</h1>
                                                        <p>{description}</p>
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