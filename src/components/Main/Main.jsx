import React from 'react'
import Form from '../Form/Form'
import SportList from '../SportList/SportList'

export default function Main({storage, setStorage}){
    return(
        <div className="main">
            <Form storage={storage} setStorage={setStorage}></Form>
            <SportList storage={storage} setStorage={setStorage}></SportList>
        </div>
    )
}