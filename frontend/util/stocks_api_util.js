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

export const getOwnedStocks = (user_id) => (
    $.ajax({
        url: `/api/users/${user_id}/portfolios`
    })
)

export const getWatchedStocks = (user_id) => (
    $.ajax({
        url: `/api/users/${user_id}/watchlists`
    })
)

export const getPortfolioItem = (user, stock_id) => (
    $.ajax({
        url: `/api/users/${user.id}/portfolios/${stock_id}`
    })
)

export const getWatchlistItem = stock_id => (
    $.ajax({
        url: `/api/watchlists/${stock_id}`
    })
)

export const getIexStock = (ticker, option = 'intra') => {
    return $.ajax({
        url: `/api/stocks/${ticker.toUpperCase()}`,
        data: { option }
    })
}

export const submitOrder = stock_order => {
    return $.ajax({
        url: `/api/stock_orders`,
        method: `POST`,
        data: { stock_order }
    })
}

export const getSummary = user => {
    return $.ajax({
        url: `/api/users/${user.id}/summaries`,
        method: `GET`
    })
}

export const updateSummary = () => {
    return $.ajax({
        url: `/api/summaries`
    })
}