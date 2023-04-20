import React, { useEffect, useState } from 'react'
import axios from 'axios';

const ComA = () => {

    const [num, setNum] = useState();
    const [name, setName] = useState();
    const [moves, setMove] = useState()

    useEffect(()=>{
        // alert("hi")
        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            // console.log(res.data.name);
            setName(res.data.name)
            setMove(res.data.moves.length)

        }
        getData()
    })

  return (
    <>
        <h1> You Choose <span style={{color: "red"}}> {num} value </span> </h1>
        <h1> My name is <span style={{color: "red"}}> {name}      </span> </h1>
        <h1> I have     <span style={{color: "red"}}> {moves} moves</span> </h1>
        <select value={num} onChange={(event)=> {
            setNum(event.target.value)
        }}>
            <option value="1"> 1 </option>
            <option value="25"> 25 </option>
            <option value="3"> 3 </option>
            <option value="4"> 4 </option>
            <option value="5"> 5 </option>
        </select>
    </>
  )
}

export default ComA