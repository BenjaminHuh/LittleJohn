import {
    RECEIVE_STOCKS,
    RECEIVE_STOCK
} from '../actions/stocks_actions'

const stocksReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_STOCKS:
            let nextState = Object.assign({}, state);
            Object.keys(action.stocks).forEach(id => {
                nextState[id] = action.stocks[id]
            })
            return nextState;
        
        case RECEIVE_STOCK:
            const newStock = { [action.stock.id]: action.stock }
            // debugger
            return Object.assign({}, state, newStock);
    
        default:
            return state;
    }
}

export default stocksReducer;