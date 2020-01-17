export const createAccount = (user) => (
    $.ajax({url: `/api/users/${user.id}`, method: 'post', data: { account: {user_id: user.id, balance: 0 }}})
)

export const receiveAccounts = (user) => (
    $.ajax({url: `/api/users/${user.id}`, method: 'post'})
)