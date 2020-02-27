export const signin = user => (
    $.ajax({
      method: 'POST',
      url: '/api/session',
      data: { user }
    })
  );
  
  export const signup = user => (
    $.ajax({
      method: 'POST',
      url: '/api/users',
      data: { user }
    })
  );
  
  export const logout = () => (
    $.ajax({
      method: 'DELETE',
      url: '/api/session'
    })
  );

  export const updateUser = (user) => {
    // debugger
    return (
      $.ajax({
        method: 'PUT',
        url: `/api/users/${user.id}`,
        data: { user: { username: user.username, balance: user.balance, watchlist: user.watchlist } }
      })
  )}
  