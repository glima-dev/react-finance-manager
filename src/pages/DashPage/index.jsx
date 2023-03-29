import FinancialSummary from '../../components/DashFinancialSummary'
import DashForm from '../../components/DashForm'
import HomeHeader from '../../components/DashHeader'
import TotalValue from '../../components/DashTotalMoney'
import './index.css'

export default function DashPage({ setLogin, transactionsList, setTransactionsList, categoryList, setCategoryList, addTransaction, removeTransaction, filter, setFilter }) {

    return (
        <>
            <HomeHeader setLogin={setLogin} />
            <main className='default-container dash page-flex'>
                <section className='section-left'>
                    <DashForm
                        transactionsList={transactionsList}
                        setTransactionsList={setTransactionsList}
                        categoryList={categoryList}
                        setCategoryList={setCategoryList}
                        addTransaction={addTransaction}
                    />
                    <TotalValue
                        transactionsList={transactionsList} />
                </section>
                <FinancialSummary
                    transactionsList={transactionsList}
                    categoryList={categoryList}
                    setTransactionsList={setTransactionsList}
                    removeTransaction={removeTransaction}
                    filter={filter}
                    setFilter={setFilter}
                />
            </main>
        </>
    )
}