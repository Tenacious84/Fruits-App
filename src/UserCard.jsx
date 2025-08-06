import React from 'react'
import "./UserCard.css"
import Button from "./Button.jsx"



function UserCard(props) {

    function handleDelete(id) {
        console.log(id)
        props.setFruits(prev => prev.filter((e, idx) => idx != id))
        localStorage.setItem('Fruits', JSON.stringify(props.Fruits.filter((e, idx) => idx != id)))
    }

    return (
        <div className="layout">
            <div className='cardContainer'>
                <img src={props.img} alt="Fruit image" />
                <h2>{props.title}</h2>
                <p>{props.para}</p>
<br />
                <div className="button">
                    <Button title={'Read more'} background='black' color='white' />
                    <Button title={'🗑️'} background='black' onClick={() => { handleDelete(props.id) }} />
                </div>

            </div>
        </div>
    )
}

export default UserCard