// const { default: axios } = require("axios")

const state = {
  jobs: [],
  user: {}
}

function getJob() {
  axios.get('/api/jobs')
  .then(response => {
    state.jobs = response.data
  })
}

getJob()

function getUser() {
    axios.get('/api/sessions')
    .then(sessionInfo => {
      if (sessionInfo.data.userId){
        // if logged in
        state.userId = sessionInfo.data.userId;
        console.log(state.userId)
          document.querySelector('#userName')
          .innerHTML = sessionInfo.data.userId + ' is logged in ' + '<br><button id="logout">Logout</button>'

          // to make a delete request to log out a user
          document.querySelector('#logout').addEventListener('click', event => {
            axios.delete('/api/sessions').then(() => {
              window.location.reload()
            })
          })
          // if not logged in
      } else {
          document.querySelector('#userName')
          .innerHTML = 'please login <br><a href="/login.html">Login</a> '
      }
    })
  }

  getUser()