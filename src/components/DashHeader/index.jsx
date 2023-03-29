import './index.css'
import logoDark from '../../assets/img/logo-dark.svg'

export default function HomeHeader({ setLogin }) {

    return (
        <header className='dash-header'>
            <div className='default-container dash header-flex'>
                <img src={logoDark} alt='Company Logo' />
                <button
                    className='bt-secondary-default'
                    onClick={() => setLogin(false)}
                >Início</button>
            </div>
        </header>
    )
}