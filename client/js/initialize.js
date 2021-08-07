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
      if (sessionInfo.data.userName){
        // if logged in
        state.user = sessionInfo.data.userName;
          document.querySelector('#userName')
          .innerHTML = sessionInfo.data.userName + ' is logged in ' + '<br><button id="logout">Logout</button>'

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