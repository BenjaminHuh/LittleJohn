import {
    RECEIVE_STOCKS
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
        
        default:
            return state;
    }
}

export default stocksReducer;