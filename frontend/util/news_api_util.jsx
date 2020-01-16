export const getNews = topic => (
    $.ajax({
       url: `/api/news/${topic}`
    })
)