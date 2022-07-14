import React from 'react'
import SportItem from '../SportItem/SportItem'

export default function SportList({storage, setStorage}){
    const storageCopy = Object.assign([], storage)
    const sortedStorage = storageCopy.sort((a, b) => {
        if(Date.parse(a.data) < Date.parse(b.data)){
            return 1
        } return -1
    });

    return(
        <div className="sport-wrapper">
            <div className="name-list">
                <span>Дата (ДД.ММ.ГГ)</span>
                <span>Пройдено км</span>
                <span>Действия</span>
            </div>
            <div className="sport-list">
                {sortedStorage.map((item, index) => {
                    return <SportItem key={index} id={item.id} data={item.data} distance={item.distance} storage={storage} setStorage={setStorage}></SportItem>
                })}
            </div>
        </div>
    )

}