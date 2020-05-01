import React, { createContext, useReducer } from 'react';
import ItemReducer from './ItemReducer';

import axios from 'axios'

//initial State
const initialState = {
    items : [],
    loading: false
};

//create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ItemReducer, initialState);

    //Actions: calls to our reducer
    const getItems = () => {
        setItemsLoading();
        axios.get('/api/items').then(res =>
            dispatch({
                type: 'GET_ITEMS',
                payload: res.data
            })
        )
    }

    const addItem = (item) => {
        axios
            .post('/api/items', item)
            .then(res => 
                dispatch({
                    type: 'ADD_ITEMS',
                    payload: res.data
                })
            )
    }

    const deleteItems = (id) => {
        axios.delete(`/api/items/${id}`).then(res =>
            dispatch({
                type: 'DELETE_ITEMS',
                payload: id
            })
        )
    }

    const setItemsLoading = () => {
        dispatch ({
            type: 'ITEMS_LOADING'
        }) 
    }

    return(<GlobalContext.Provider value ={{
        items: state.items,
        getItems,
        deleteItems,
        addItem,
        setItemsLoading
    }}>
        {children}
    </GlobalContext.Provider>);
}

export default GlobalContext;