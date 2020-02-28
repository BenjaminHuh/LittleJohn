import * as APIUtil from '../util/stocks_api_util';

export const RECEIVE_STOCKS = 'RECEIVE_STOCKS';
export const RECEIVE_STOCK = 'RECEIVE_STOCK';
export const RECEIVE_STOCKS_ERRORS = 'RECEIVE_STOCKS_ERRORS';
export const CLEAR_STOCKS_ERRORS = 'CLEAR_STOCK_ERRORS';
export const GET_OWNED_STOCKS = 'GET_OWNED_STOCKS';
export const GET_WATCHED_STOCKS = 'GET_WATCHED_STOCKS';
export const GET_PORTFOLIO_ITEM = 'GET_PORTFOLIO_ITEM';
export const GET_WATCHLIST_ITEM = 'GET_WATCHLIST_ITEM';
export const CLEAR_PORTFOLIO_LIST = 'CLEAR_PORTFOLIO_LIST';
export const CLEAR_WATCHLIST_LIST = 'CLEAR_WATCHLIST_LIST';
export const GETTING_OWNED_STOCKS = 'GETTING_OWNED_STOCKS';
export const DONE_GETTING_OWNED_STOCKS = 'DONE_GETTING_OWNED_STOCKS';
export const GETTING_WATCHED_STOCKS = 'GETTING_WATCHED_STOCKS';
export const DONE_GETTING_WATCHED_STOCKS = 'DONE_GETTING_WATCHED_STOCKS';

export const getStocks = () => dispatch => (
    APIUtil.receiveStocks()
        .then(stocks => dispatch({ type: RECEIVE_STOCKS, stocks }))
)

export const getStock = ticker => dispatch => (
    APIUtil.receiveStock(ticker)
        .then(stock => dispatch({ type: RECEIVE_STOCK, stock }))
)

export const getPortfolio = (user_id) => dispatch => {
    dispatch({ type: GETTING_OWNED_STOCKS });
    return (
        APIUtil.getOwnedStocks(user_id)
            .then(stocks => dispatch({ type: GET_OWNED_STOCKS, stocks }))
            .then(() => dispatch({ type: DONE_GETTING_OWNED_STOCKS }))
    )
}

export const getWatchlist = (user_id) => dispatch => {
    dispatch({ type: GETTING_WATCHED_STOCKS })
    return (
        APIUtil.getWatchedStocks(user_id)
            .then(stocks => dispatch({ type: GET_WATCHED_STOCKS, stocks }))
            .then(() => dispatch({ type: DONE_GETTING_WATCHED_STOCKS }))
    )
}

export const getPortfolioItem = (user, stock_id) => dispatch => (
    APIUtil.getPortfolioItem(user, stock_id)
        .then(stock => dispatch({ type: GET_PORTFOLIO_ITEM, stock }))
)

export const getWatchlistItem = stock_id => dispatch => (
    APIUtil.getWatchlistItem(stock_id)
        .then(stock => dispatch({ type: GET_WATCHLIST_ITEM, stock }))
)

export const submitOrder = order => dispatch => (
    APIUtil.submitOrder(order)
        .then(stock => dispatch({ type: RECEIVE_STOCK, stock}))
)

export const receiveErrors = errors => ({
    type: RECEIVE_STOCKS_ERRORS,
    errors
})

export const clearStocksErrors = () => ({
    type: CLEAR_STOCKS_ERRORS
})

export const clearPortfolioList = (portfolio = {}) => ({
    type: CLEAR_PORTFOLIO_LIST,
    portfolio
})

export const clearWatchlist = () => dispatch => (
    dispatch({
    type: CLEAR_WATCHLIST_LIST,
}))

export const clearStockItem = () => ({
    type: 'CLEAR_STOCK_ITEM'
})

export const getSummary = user => dispatch => (
    APIUtil.getSummary(user)
        .then(summary => dispatch({ type: "GET_SUMMARY", summary }))
)

export const clearSummary = () => dispatch => (
    dispatch({ type: "CLEAR_SUMMARY" })
)

export const clearStock = () => dispatch => (
    dispatch({ type: "CLEAR_STOCK" })
)
