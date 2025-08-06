import {useState, useEffect} from "react"
import "./App.css"
import AddFruit from "./AddFruit.jsx"
import UserCard from "./UserCard.jsx"
import Fruits_Data from "./Fruits.js"


const App=()=>{


  const [Fruits, setFruits] = useState(Fruits_Data);

useEffect(() => {

  if (localStorage.getItem('Fruits')) {
    setFruits(JSON.parse(localStorage.getItem('Fruits')));
  } 
  else {
    localStorage.setItem('Fruits', JSON.stringify(Fruits));
  }
}, []);


  return(
    <div className='container'>
     <AddFruit Fruits={Fruits} setFruits={setFruits}/>
     <div className="cardContainer">
      {
        Fruits.map((fruit,idx)=>(
<UserCard  img={fruit.img} title={fruit.title} para={fruit.para} key={idx} id={idx} Fruits={Fruits} setFruits={setFruits}/>
        ))
      }
    
     </div>

    </div>
  )
}


export default App












































// import { useState } from 'react'
// import './App.css'


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
     
//     </>
//   )
// }

// export default App
