
import React from 'react'

const Button = ({ color, text }) => {
    const onClick = () => {
        console.log("")
    }
    return (
        <button onClick={onClick} className='btn' style={{ backgroundColor: color }}>{text}</button>)
}

export default Button


