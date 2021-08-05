function renderAddJob() {
  document.querySelector('#page').innerHTML = `
  <section class="job">
    <h1>Add Job</h1>

    <form onsubmit="createJob(event)">
      <section id="error"></section>

      <fieldset>
        <label for="">Role:</label>
        <input type="text" name="role">
      </fieldset>

      <fieldset>
        <label for="">Company:</label>
        <input type="text" name="company">
      </fieldset>
      
      <fieldset>
        <label for="">Link to ad:</label>
        <input type="text" name="link">
      </fieldset>

      <fieldset>
        <label for="">Close date:</label>
        <input type="date" name="date">
      </fieldset>

      <fieldset>
        <label for="">Contact person:</label>
        <input type="text" name="contact">
      </fieldset>

      <fieldset>
        <label for="">Notes:</label>
        <textarea name="notes" id="" cols="30" rows="10"></textarea>
      </fieldset>

      <fieldset>
        <label for="">Status:</label>

        <input type="radio" id="Completed" name="status" value="Completed">
        <label for="completed">Completed</label><br>

        <input type="radio" id="Incomplete" name="status" value="Incomplete">
        <label for="incomplete">Incomplete</label>
      </fieldset>
      
      <button id="add-job">Submit</button>

    </form>
  </section>
  `
}

function createJob(event) {
  event.preventDefault()
  const form = event.target

  const data = Object.fromEntries(new FormData(form))

  axios.post('/api/jobs', data)
    .then(successResponse => {
      const newJob = successResponse.data
      state.jobs.push(newJob)
    })
    .catch(errorResponse => {
      document.querySelector('#error')
        .innerHTML = errorResponse.response.data.message
    })
}

// renderAddJob()