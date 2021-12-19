// import { data } from "./data/data"
import { normalizedData } from "./data/normalizedData"

export const ActionTypes = {
    SET_SORT: 'SET_SORT',
    SET_SEARCH: 'SET_SEARCH',
    RESET_SEARCH: 'RESET_SEARCH',
    RESET_SORT: 'RESET_SORT',
    INCREASE_INDEX: 'INCREASE_INDEX'
}



export const initialState = {
    data: normalizedData,
    sortedBy: 30,
    searchValue: '',
    currentIndex: 10
}

export const reducer = (state, action) => {
    switch (action.type) {
        case ActionTypes.SET_SORT:
            return {
                ...state, sortedBy: action.payload
            }
        case ActionTypes.SET_SEARCH:
            return {
                ...state, searchValue: action.payload
            }
        case ActionTypes.RESET_SORT:
            return {
                ...state, sortedBy: null
            }
        case ActionTypes.RESET_SEARCH:
            return {
                ...state, searchValue: ''
            }
        case ActionTypes.INCREASE_INDEX:
            return {
                ...state, currentIndex: state.currentIndex + 10
            }
        default:
            return state
    }
}

export const setSortAction = (payload) => ({ type: ActionTypes.SET_SORT, payload })
export const setSeacrhAction = (payload) => ({ type: ActionTypes.SET_SEARCH, payload })

export const resetSortAction = () => ({ type: ActionTypes.RESET_SORT })
export const resetSeacrhAction = () => ({ type: ActionTypes.RESET_SEARCH })
export const increaseIndexAction = () => ({ type: ActionTypes.INCREASE_INDEX })

