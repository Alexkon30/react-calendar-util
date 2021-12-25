import React, { useContext, useMemo } from 'react'
import { TableContext } from '../TableContext'
import { setSortAction, setSeacrhAction } from '../TableReducer'
import { TableHeaderCell } from './TableHeaderCell'

export const TableHeader = () => {
    const [state, dispatch] = useContext(TableContext)

    const arrayOfTitles = useMemo(() => {
        const result = []
        for (let i = 1; i <= 31; i++) {
            result.push(i)
        }
        return result
    }, [])


    return (
        <thead>
            <tr>
                <th>
                    Username
                </th>
                {arrayOfTitles.map(title => <TableHeaderCell key={title}>
                    {title}
                </TableHeaderCell>)}
                <th>Monthly total</th>
            </tr>
            <tr>
                <td>
                    <input
                        value={state.searchValue}
                        onChange={(e) => dispatch(setSeacrhAction(e.target.value))}
                    />
                </td>
                {arrayOfTitles
                .map(title => <td key={title}
                    onClick={() => { dispatch(setSortAction(title - 1)) }}>
                    {state.sortedBy === title - 1 && state.mode === 'reverse'
                        ? <i className="bi bi-sort-numeric-down-alt"></i>
                        : <i className="bi bi-sort-numeric-down"></i>
                    }
                </td>)}
                <td onClick={() => { dispatch(setSortAction('title')) }}>
                    {state.sortedBy === 'title' && state.mode === 'reverse'
                        ? <i className="bi bi-sort-numeric-down-alt"></i>
                        : <i className="bi bi-sort-numeric-down"></i>
                    }
                </td>
            </tr>
        </thead>
    )
}
