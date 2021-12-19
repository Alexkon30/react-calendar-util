import React, {useContext, useMemo} from 'react'
import { TableRow } from './TableRow'
import { TableContext } from '../TableContext'

export const TableBody = () => {
const [state,] = useContext(TableContext)

const tableData = useMemo(() => {
    let result = state.data.filter((item, index) => index < state.currentIndex)

    if (state.sortedBy === 'title') {
        result.sort((a, b) => {
            if (a.total < b.total) return -1
            if (a.total > b.total) return 1
            return 0
        })
    } else if (state.sortedBy !== null) {
        result.sort((a, b) => {
            if (a.Days[state.sortedBy].value < b.Days[state.sortedBy].value) return -1
            if (a.Days[state.sortedBy].value > b.Days[state.sortedBy].value) return 1
            return 0
        })
    } 

    if (state.searchValue) {
        result = result.filter(item => item.Fullname.toLowerCase().includes(state.searchValue.toLowerCase()))
    }

    return result

}, [state.sortedBy, state.searchValue, state.currentIndex, state.data])


    return (
        <tbody>
            {tableData.map((row, index) => <TableRow row={row} key={row.id}/>)}
        </tbody>
    )
}
