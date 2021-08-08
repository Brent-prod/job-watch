function getUser() {
  axios.get('/api/sessions')
  .then(sessionInfo => {
    if (sessionInfo.data.userName){
      // if logged in
      state.user = sessionInfo.data.userName;
        document.querySelector('#userName')
        .innerHTML = `
        <p> Welcome, ${sessionInfo.data.userName}!</p>
        <button id="logout">Logout</button>
        `

        // to make a delete request to log out a user
        document.querySelector('#logout').addEventListener('click', event => {
          axios.delete('/api/sessions').then(() => {
            window.location = '/index.html'
          })
        })
        // if not logged in
    } else {
        document.querySelector('#userName')
        .innerHTML = sessionInfo.data.error
    }
  })
}

getUser()

