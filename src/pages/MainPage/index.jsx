import React from 'react'
import MainLeftColumn from '../../components/MainLeftColumn'
import MainRightColumn from '../../components/MainRightColumn'
import './index.css'

export default function MainPage({ setLogin }) {

    return (
        <div className='div-background'>
            <main className='main-content default-container'>
                <MainLeftColumn setLogin={setLogin} />
                <MainRightColumn />


            </main>
        </div>
    )

}