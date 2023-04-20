import React, { useState } from 'react'
import Menu from './Menu'
import MenuItems from './MenuItems';
import CatMenu from './CatMenu';


// const allCatValues = Menu.map((curEle)=>{
//     return curEle.category
// })


const allCatValues = [...new Set(Menu.map((curEle)=>{
        return curEle.category
    })), "all"];
    console.log(allCatValues);


const GalleryReact = () => {
    const [items, setItems] = useState(Menu);
    const [catItems, setCatitems] = useState(allCatValues)

    const addCatgory = (cat) => {

        if(cat === "all"){
            setItems(Menu)
            return;
        }
        const allCategoryitems = Menu.filter((elem) => {
            return (elem.category === cat)
        });
        setItems(allCategoryitems)
    }


    return (
        <>
            <h1 className='mt-5 text-center main-heading'>Order Your Favourite Dish</h1>
            <hr />

            {/* category */}
            <CatMenu addCatgory={addCatgory} catItems={catItems}/>

            {/* my main items section */}
            <MenuItems items={items} />
        </>
    )
}

export default GalleryReact;




// let a = ["1", "1", "2", "3", "3", "1"];
// let unique = a.filter((item, i, ar)=> ar.indexOf(item) === i);

// let a = new Set(["1", "1", "2", "3", "3", "1"])