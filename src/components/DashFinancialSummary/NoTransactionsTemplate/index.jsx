import blankCards from '../../../assets/img/cards-blank.svg'
import './index.css'

export default function NoTransactionList() {

    return (
        <div className='no-transaction'>
            <h2>Você ainda não possui nenhum lançamento</h2>
            <img src={blankCards} alt='Sem lançamentos' />
        </div>
    )
}