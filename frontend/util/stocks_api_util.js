export const receiveStocks = () => (
    $.ajax({
        url: '/api/stocks/'
    })
)

export const receiveStock = ticker => (
    $.ajax({
        url: `/api/stocks/${ticker.toUpperCase()}`
    })
)

export const getOwnedStocks = () => (
    $.ajax({
        url: '/api/portfolios'
    })
)

export const getWatchedStocks = () => (
    $.ajax({
        url: '/api/watchlists'
    })
)

export const getPortfolioItem = stock_id => (
    $.ajax({
        url: `/api/portfolios/${stock_id}`
    })
)

export const getWatchlistItem = stock_id => (
    $.ajax({
        url: `/api/watchlists/${stock_id}`
    })
)

export const getIexStock = (ticker, option = 'intra') => {

    return $.ajax({
        url: `https://cloud.iexapis.com/stable/stock/aapl/intraday-prices/?token=${window.iexAPIKey}`
    })
}