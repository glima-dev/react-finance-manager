import './index.css'

export default function TotalValue({ transactionsList }) {

  const sum = transactionsList.reduce((previousValue, currentValue) => {
    if (currentValue.type === 'entrada') {
      return previousValue + parseFloat(currentValue.money)
    } else {
      return previousValue + -parseFloat(currentValue.money)
    }
  }, 0)

  return (
    <section className='section-balance'>
      <div className='balance-flex'>
        <p>Valor total:</p>
        <p className='brand'>$ {sum}</p>
      </div>
      <span>O valor se refere ao saldo</span>
    </section>
  )
}

