import { useState } from 'react'
import "./AddFruit.css"
import Button from './Button.jsx'

function AddFruit(props) {

    const [imgUrl, setImgUrl] = useState('')
    const [fruitName, setFruitName] = useState('')
    const [fruitPara, setFruitPara] = useState('')

    function handleAdd() {
        console.log("Check adding..")
        console.log(imgUrl, fruitName, fruitPara)
        props.setFruits(prev => [...prev, { img: imgUrl, title: fruitName, para: fruitPara }])
        localStorage.setItem('Fruits', JSON.stringify([...props.Fruits, { img: imgUrl, title: fruitName, para: fruitPara }]))
        setImgUrl('')
        setFruitName('')
        setFruitPara('')
    }

    return (
        <div className="addFruit">

            <input type="text" placeholder="Insert image link..." value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} />
            <br />
            <input type="text" placeholder="Type your fruit name..." value={fruitName} onChange={(e) => setFruitName(e.target.value)} />
            <br />
            <input type="text" placeholder="What makes your fruit special" value={fruitPara} onChange={(e) => setFruitPara(e.target.value)} />
            <Button background='blue' title='Add Fruit' onClick={handleAdd} />


        </div>
    )
}



export default AddFruit