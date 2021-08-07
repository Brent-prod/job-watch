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

