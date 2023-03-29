import './index.css'
import NoTransactionList from './NoTransactionsTemplate'
import TransactionsFilter from './TransactionsFilter'
import TransactionList from './TransactionsList'

export default function FinancialSummary({ transactionsList, categoryList, setTransactionsList, removeTransaction, filter, setFilter }) {

    return (
        <section className='section-summary'>
            <div className='summary-top-wrap'>
                <h2>Resumo financeiro</h2>
                <TransactionsFilter
                    filter={filter}
                    setFilter={setFilter}
                    categoryList={categoryList}
                />
            </div>
            {!!transactionsList.length ?
                <TransactionList transactionsList={transactionsList} setTransactionsList={setTransactionsList} removeTransaction={removeTransaction} />
                :
                <NoTransactionList />}
        </section>
    )
}

