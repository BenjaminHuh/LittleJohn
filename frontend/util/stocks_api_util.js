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