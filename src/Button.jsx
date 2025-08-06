import React from "react"
import "./Button.css"

function Button(props) {

    return (
        <div>
            <button style={{ background: props.background, color: props.color }} onClick={props.onClick}>{props.title}</button>
        </div>
    )
}








export default Button













































































































// import './Button.css'

// const Button = (props) => {

//     return (
//         <div>
//             <Button>{props.title}</Button>
//         </div>
//     )
// }


// export default Button