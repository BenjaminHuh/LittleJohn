import * as APIUtil from '../util/stocks_api_util';

export const RECEIVE_STOCKS = 'RECEIVE_STOCKS';
export const RECEIVE_STOCK = 'RECEIVE_STOCK';
export const RECEIVE_STOCKS_ERRORS = 'RECEIVE_STOCKS_ERRORS';
export const CLEAR_STOCKS_ERRORS = 'CLEAR_STOCK_ERRORS';
export const GET_OWNED_STOCKS = 'GET_OWNED_STOCKS';
export const GET_WATCHED_STOCKS = 'GET_WATCHED_STOCKS';
export const GET_PORTFOLIO_ITEM = 'GET_PORTFOLIO_ITEM';
export const GET_WATCHLIST_ITEM = 'GET_WATCHLIST_ITEM';
export const CLEAR_PORTFOLIO_LIST = 'CLEAR_PORTFOLIO_LIST'

export const getStocks = () => dispatch => (
    APIUtil.receiveStocks()
        .then(stocks => dispatch({ type: RECEIVE_STOCKS, stocks }))
)

export const getStock = ticker => dispatch => (
    APIUtil.receiveStock(ticker)
        .then(stock => dispatch({ type: RECEIVE_STOCK, stock }))
)

export const getPortfolio = () => dispatch => (
    APIUtil.getOwnedStocks()
        .then(stocks => dispatch({ type: GET_OWNED_STOCKS, stocks }))
)

export const getWatchlist = () => dispatch => (
    APIUtil.getWatchedStocks()
        .then(stocks => dispatch({ type: GET_WATCHED_STOCKS, stocks }))
)

export const getPortfolioItem = stock_id => dispatch => (
    APIUtil.getPortfolioItem(stock_id)
        .then(stock => dispatch({ type: GET_PORTFOLIO_ITEM, stock }))
)

export const getWatchlistItem = stock_id => dispatch => (
    APIUtil.getWatchlistItem(stock_id)
        .then(stock => dispatch({ type: GET_WATCHLIST_ITEM, stock }))
)

export const receiveErrors = errors => ({
    type: RECEIVE_STOCKS_ERRORS,
    errors
})

export const clearStocksErrors = () => ({
    type: CLEAR_STOCKS_ERRORS
})

export const clearPortfolioList = () => ({
    type: CLEAR_PORTFOLIO_LIST
})
