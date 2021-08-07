// const { default: axios } = require("axios")

const state = {
  jobs: [],
  user: {}
}

function getJob() {
  return axios.get('/api/jobs')
  .then(response => {
    state.jobs = response.data
  })
}

getJob()

function getUser() {
    axios.get('/api/sessions')
    .then(sessionInfo => {
      // console.log("sessionInfo @ initialize.js " + sessionInfo.data.userName)
      if (sessionInfo.data.userName){
        // console.log("sessionInfo.data.userId @ initialize.js is " + sessionInfo.data.userName)
        // if logged in
        state.user = sessionInfo.data.userName;
        // console.log("state.user.Id "+state.user)
          document.querySelector('#userName')
          .innerHTML = sessionInfo.data.userName + ' is logged in ' + '<br><button id="logout">Logout</button>'

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