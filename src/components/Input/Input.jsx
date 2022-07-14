import React from 'react'
import { useState } from 'react'

export default function Input({name, description, type}){
    let [value, setValue] = useState('')

    function handleChange(e){
        setValue(value =  e.target.value)
    }

    return(
        <div className="form-input">
            <label htmlFor={name}>{description}</label>
            <input className={`input-${name}`} value={value} type={type} name={name} onChange={handleChange}/>
        </div>
    )
}