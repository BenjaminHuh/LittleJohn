import {
    RECEIVE_STOCK
} from '../actions/stocks_actions'

const stockReducer = (state = { test: "test"}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_STOCK:
            const newStock = { [action.stock.symbol]: action.stock }
            // debugger
            return Object.assign({}, newStock);

        default:
            return state;
    }
}

export default stockReducer;