function getUser() {

  axios.get('/api/sessions')
    .then(sessionInfo => {
      if (sessionInfo.data.userName) {
        // if logged in
        state.user = sessionInfo.data.userName;
        document.querySelector('#userName')
          .innerHTML = `
        <p> Welcome, ${sessionInfo.data.userName}! </p>
        <button id="logout">Logout</button>
        `

        // to make a delete request to log out a user
        document.querySelector('#logout').addEventListener('click', () => {
          axios.delete('/api/sessions').then(() => {
            window.location = '/index.html'
          })
        })
      }
      // else {
      //   // if not logged in
      //   console.log("hi")
      //   document.querySelector('#userName')
      //     .innerHTML = sessionInfo.data.error
      // }
    })
    .catch(error => {
      // console.log(error)
      document.getElementById("errors").style.display = "block"

      document.querySelector('#errors')
        .innerHTML = error.response.data.error;
    })
}

getUser()

