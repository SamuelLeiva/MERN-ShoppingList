//we specify the app state changes in response to certain actions to our context 
const ItemReducer = (state, action) => {
    switch(action.type) {
        case 'GET_ITEMS':
            return {
                ...state,
                items: action.payload,
                loading: false
            }

        case 'DELETE_ITEMS':
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            }
        case 'ADD_ITEMS':
            return{
                ...state,
                items: [action.payload, ...state.items]
            };
        case 'ITEMS_LOADING':
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}

export default ItemReducer;