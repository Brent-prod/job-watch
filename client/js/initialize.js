// const { default: axios } = require("axios")

const state = {
  jobs: []
}

function getJob() {
  return axios.get('/api/jobs')
  .then(response => {
    state.jobs = response.data
  })
}

getJob()