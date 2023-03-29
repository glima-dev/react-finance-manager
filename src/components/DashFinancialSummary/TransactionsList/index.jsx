import './index.css'
import React from 'react';


export default function TransactionList({ transactionsList, setTransactionsList, removeTransaction }) {

    /*     function removeTransaction(transactionDescription) {
            const newList = transactionsList.filter((transaction) => transaction.description !== transactionDescription)
            setTransactionsList(newList)
        } */

    return (
        <ul className='extract'>
            {transactionsList.map((transaction, index) => (
                <li className='item-card' key={index}>
                    <div className='type-flag'></div>
                    <div className='column-right'>
                        <div className='card-top'>
                            <h3>{transaction.description}</h3>
                            <span>{transaction.type}</span>
                        </div>
                        <div className='card-bottom'>
                            <p>{Math.abs(transaction.money).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
                            <button className='trash-bt' onClick={() => removeTransaction(transaction.description)}></button>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}