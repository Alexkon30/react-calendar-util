import React, {useContext} from 'react'
import { TableBody } from './TableBody'
import { TableHeader } from './TableHeader'
import { TableContext } from '../TableContext'
import { increaseIndexAction } from '../TableReducer'

export const Table = () => {

    const [, dispatch] = useContext(TableContext)

    return (
        <React.Fragment>
            <table>
                <TableHeader/>
                <TableBody/>
            </table>
            <input type="button" value="Add" onClick={() => dispatch(increaseIndexAction())}/>
        </React.Fragment>
    );
}
