import React, { useContext, useMemo } from 'react'
import { TableRow } from './TableRow'
import { TableContext } from '../TableContext'

export const TableBody = () => {
    const [state,] = useContext(TableContext)
    const {currentIndex, data, sortedBy, searchValue, mode} = state

    const tableData = useMemo(() => {
        let result = data.filter((_, index) => index < currentIndex)

        if (sortedBy === 'title') {
            result.sort((a, b) => {
                if (a.total < b.total) return -1
                if (a.total > b.total) return 1
                return 0
            })
        } else if (sortedBy !== null) {
            result.sort((a, b) => {
                if (a.Days[sortedBy].value < b.Days[sortedBy].value) return -1
                if (a.Days[sortedBy].value > b.Days[sortedBy].value) return 1
                return 0
            })
        }

        if (searchValue) {
            result = result.filter(item => item.Fullname.toLowerCase().includes(searchValue.toLowerCase()))
        }

        if (mode === 'reverse') {
            result.reverse()
        }

        return result

    }, [sortedBy, searchValue, currentIndex, data, mode])


    return (
        <tbody>
            {tableData.map((row) => <TableRow row={row} key={row.id} />)}
        </tbody>
    )
}
