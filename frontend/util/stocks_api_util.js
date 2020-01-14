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

