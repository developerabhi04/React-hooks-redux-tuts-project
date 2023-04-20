import React, { useEffect, useState } from 'react'

const Api = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] =useState("delhi")

    useEffect(()=>{
        const ApiData = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e1a8bef725b7f4b56e03b655b93423b8`
            const res = await fetch(url);
            const resJson = await res.json();
            setCity(resJson.main)
        }
        ApiData()
    })

    const inputChange = (event) => {
        setSearch(event.target.value)
    }

  return (
    <>
            <div className='box'>
                <div className='inputData'>
                    <input type='search' 
                    className='inputfield'
                    onChange={inputChange}
                     />
                </div>
                {!city ? (
                    <p> Data not found </p>
                ) : (
                <div>
                    <div className='info'>
                        <h2 className='location'>
                            <i className="fa-solid fa-street-view"></i> 
                            {search}
                        </h2>
                        <h1 className='temp'>
                        {city.temp} °C
                        </h1>
                        <h3 className='tempmin_max'> Min : {city.temp_min} °C | Max : {city.temp_max} °C </h3>
                    </div>
                <div className='wave -one'></div>
                <div className='wave -two'></div>
                <div className='wave -three'></div>
                </div>

                )}
            </div>
        </>
  )
}

export default Api