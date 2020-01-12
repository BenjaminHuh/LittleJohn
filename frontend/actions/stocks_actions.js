import * as APIUtil from '../util/stocks_api_util';

export const RECEIVE_STOCKS = 'RECEIVE_STOCKS';
export const RECEIVE_STOCK = 'RECEIVE_STOCK';
export const RECEIVE_STOCKS_ERRORS = 'RECEIVE_STOCKS_ERRORS';
export const CLEAR_STOCKS_ERRORS = 'CLEAR_STOCK_ERRORS';


export const getStocks = () => dispatch => (
    APIUtil.receiveStocks()
        .then(stocks => dispatch({ type: RECEIVE_STOCKS, stocks}))
)

export const getStock = ticker => dispatch => (
    APIUtil.receiveStock(ticker)
        .then(stock => dispatch({ type: RECEIVE_STOCK, stock}))
)

export const receiveErrors = errors => ({
    type: RECEIVE_STOCKS_ERRORS,
    errors
})

export const clearStocksErrors = () => ({
    type: CLEAR_STOCKS_ERRORS
})
