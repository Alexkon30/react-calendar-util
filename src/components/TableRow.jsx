import React, {useContext} from 'react'
import { TableContext } from '../TableContext'

export const TableRow = ({ row}) => {
    const [state, ] = useContext(TableContext)

    return (
        <tr>
            <td>{row.Fullname}</td>
            {row.Days.map((item, index) => <td 
            className={state.sortedBy === index ? 'active' : ''}
            key={item.id}
            >{item.value}</td> )}
            <td
            className={state.sortedBy === 'title' ? 'active' : ''}
            >{row.total}</td>
        </tr>
    )
}
