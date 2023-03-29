import React from 'react';
import logo from '../../assets/img/logo.svg'
/* import ButtonPrimary from '../ButtonPrimary'; */
import './index.css'

export default function MainLeftColumn({ setLogin }) {

    return (
        <section className='left-section'>
            <img src={logo} alt="Company logo" />
            <h1>Centralize o controle das suas finanças</h1>
            <p>de forma rápida e segura</p>
            <div className='bt-sizer'>
                <button
                    className='bt-primary-default'
                    onClick={() => setLogin(true)}
                >Iniciar</button>
            </div>
        </section>
    )
}