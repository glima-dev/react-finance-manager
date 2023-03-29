import './index.css'
import { useState } from "react"

export default function TransactionsFilter({ filter, setFilter, categoryList }) {
    const [isActive, setIsActive] = useState(false)

    const handleClick = event => {
        setIsActive(current => !current)
    }

    return (
        <ul className='filter-buttons'>
            <li>
                <button className='bt-secondary-default' onClick={() => setFilter("todos")} >Todos</button>
            </li>
            {categoryList.map(category =>
                <li key={category.value}>
                    <button className='bt-secondary-default' onClick={() => setFilter(category.value)}>{category.label}</button>
                </li>
            )}
        </ul>
    )
}

