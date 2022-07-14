import React from 'react'
import Input from '../Input/Input'
import AddButton from '../AddButton/AddButton'
const uuid = require('uuid')

export default function Form({storage, setStorage}){
    const storageCopy = Object.assign([], storage);

    function handleClick(e){
        e.preventDefault()

        const dataInput = document.querySelector('.input-data');
        const distanceInput = document.querySelector('.input-distance');

        if (dataInput.value !== '' && distanceInput.value !== ''){
            
            if (checkData(dataInput.value, distanceInput.value) == false){
                setStorage(storageCopy)
            } else {
                addNewSportItemInStorage(dataInput.value, distanceInput.value)
            }

        } else {
            alert('Введите корректные дату или дистанцию')
        }
    }

    function checkData(data, distance){
        let result = true
        storageCopy.forEach(item => {
            if (item.data === data){
                item.distance = distance
                return result = false
            } 
        })
        return result
    }

    function addNewSportItemInStorage(data, distance){
        const id = uuid.v4()
        
        storageCopy.push({
            id: id,
            data: data,
            distance: distance
        })

        setStorage(storageCopy)
    }

    return(
        <div className="form">
            <form action="">
                <Input type={'date'} name='data' description={'Дата (ДД.ММ.ГГ)'}></Input>
                <Input type={'number'} name='distance' description={'Пройдено км'}></Input>
                <AddButton onClick={handleClick}></AddButton>
            </form>
        </div>
    )
}