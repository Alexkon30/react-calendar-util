import React, {useContext, useMemo} from 'react'
import { TableContext } from '../TableContext'
import { setSortAction } from '../TableReducer'

export const TableHeader = () => {
    const [, dispatch] = useContext(TableContext)

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
                <th>Username</th>
                {arrayOfTitles.map(title => <th 
                onClick={() => {dispatch(setSortAction(title - 1))}}
                key={title}
                >{title}</th>)}
                <th
                onClick={() => {dispatch(setSortAction('title'))}}
                >Monthly total</th>
            </tr>
        </thead>
    )
}
