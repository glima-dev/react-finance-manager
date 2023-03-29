import './index.css'
import React, { useState } from 'react'

export default function DashForm({ transactionsList, setTransactionsList, categoryList, setCategoryList, addTransaction }) {
    const [formData, setFormData] = useState({
        description: '',
        money: '',
        type: categoryList[0].value,
    })

    function submit(event) {
        event.preventDefault()
        addTransaction(formData)
        setFormData({
            description: '',
            money: '',
            type: categoryList[0].value,
        })
    }

    return (
        <form className='dash-form' onSubmit={submit}>
            <div className='input-flex'>
                <label className='label-default' htmlFor='description'>Descrição</label>
                <input
                    className='input-default'
                    name='description'
                    placeholder='Digite aqui sua descrição'
                    type='text'
                    required
                    value={formData.description}
                    onChange={(event) => setFormData({ ...formData, description: event.target.value })}
                />
                <span>Ex: Compra de roupas</span>
            </div>
            <div className='form-footer'>
                <div className='input-flex'>
                    <label className='label-default' htmlFor='amount'>Valor</label>
                    <input
                        className='input-default number'
                        name='amount'
                        placeholder='0'
                        type="number"
                        required
                        value={formData.money}
                        onChange={(event) => setFormData({ ...formData, money: event.target.value })}
                    />
                </div>
                <div className='input-flex'>
                    <label className='label-default' htmlFor='category'>Tipo de valor</label>
                    <select
                        className='select-default'
                        name='category' defaultValue={formData.type}
                        onChange={(event) => setFormData({ ...formData, type: event.target.value })} >
                        {categoryList.map(category => (
                            <option key={category.value} value={category.value}>{category.label}</option>
                        ))}
                    </select>
                </div>
            </div>
            <button className='bt-primary-default' type='submit'>Inserir valor</button>
        </form>
    )
}