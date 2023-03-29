import './App.css'
import { useState } from "react"
import MainPage from './pages/MainPage'
import DashPage from './pages/DashPage'
import { categoryData, firstTransaction } from "./data/data"

function App() {
  const [login, setLogin] = useState(false)
  const [categoryList, setCategoryList] = useState(categoryData)
  const [transactionsList, setTransactionsList] = useState(firstTransaction)
  const [filter, setFilter] = useState("todos")

  function addTransaction(transactionData) {
    setTransactionsList([...transactionsList, transactionData])
  }

  function removeTransaction(transactionDescription) {
    const newList = transactionsList.filter((transaction) => transaction.description !== transactionDescription)
    setTransactionsList(newList)
  }

  const filteredTransactions = transactionsList.filter(
    (transaction) => (
      filter === "todos" ?
        true :
        transaction.type === filter
    )
  )

  return (
    <>
      {login ? (
        <DashPage
          setLogin={setLogin}
          transactionsList={filteredTransactions}
          setTransactionsList={setTransactionsList}
          categoryList={categoryList}
          setCategoryList={setCategoryList}
          addTransaction={addTransaction}
          removeTransaction={removeTransaction}
          filter={filter}
          setFilter={setFilter}
        />

      ) : (
        <MainPage setLogin={setLogin} />
      )}
    </>
  );
}

export default App;
