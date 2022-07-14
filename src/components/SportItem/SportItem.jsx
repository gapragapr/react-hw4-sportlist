import React from 'react'

export default function SportItem({data, id, distance, setStorage, storage}){
    const storageCopy = Object.assign([], storage)

    function handleClick(e){
        e.preventDefault()

        const index = storageCopy.findIndex(item => item.id === id)
        storageCopy.splice(index, 1)
        setStorage(storageCopy)
    }

    return(
        <div id={id} className="sport-item">
            <span>{data}</span>
            <span>{distance}</span>
            <span onClick={handleClick}>X</span>
        </div>
    )
}