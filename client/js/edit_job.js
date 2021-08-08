// const e = require("express")

function renderEditJob() {
  const id = window.location.pathname.split("/").splice(2)[0]
  const selectedJob = state.jobs.find(job => job.id == id)

  if (selectedJob == undefined) {
    document.querySelector('#page').style.display = "block"
    document.querySelector("#errors").style.display = "block"
  } else {
    document.querySelector('#page').innerHTML = `
    <section class="job">
      <h1>Edit Job</h1>

      <form onsubmit="editJob(event)">
        <section id="error"></section>

        <fieldset>
          <label for="">Role:</label>
          <input type="text" name="role" value=${selectedJob.role}>
        </fieldset>

        <fieldset>
          <label for="">Company:</label>
          <input type="text" name="company" value=${selectedJob.company}>
        </fieldset>
        
        <fieldset>
          <label for="">Link to ad:</label>
          <input type="text" name="link" value=${selectedJob.link}>
        </fieldset>

        <fieldset>
          <label for="">Close date:</label>
          <input type="date" name="date" value=${selectedJob.close_date.slice(0, 10)}>
        </fieldset>

        <fieldset>
          <label for="">Contact person:</label>
          <input type="text" name="contact" value=${selectedJob.contact}>
        </fieldset>

        <fieldset>
          <label for="">Notes:</label>
          <textarea name="notes" id="notes" cols="30" rows="10" value=${selectedJob.notes}></textarea>
        </fieldset>

        <fieldset>
          <ul>
            <li>
              <input type="radio" name="status" value="Completed" id="completed">
              <label for="completed">Completed</label><br>
            </li>

            <li>
              <input type="radio" name="status" value="Incomplete" id="incomplete">
              <label for="incomplete" >Incomplete</label>
            </li>
          </ul>
        </fieldset>
        
        <button id="add-job">Submit</button>

      </form>
    </section>
    `

    document.querySelector('#notes').innerHTML = selectedJob.notes

    if (selectedJob.status.toLowerCase() === "completed") {
      document.querySelector("#completed").checked = true
    } else {
      document.querySelector("#incomplete").checked = true
    }
  }
}

function editJob(event) {
  event.preventDefault()
  const form = event.target

  const id = window.location.pathname.split("/").splice(2)[0]
  // console.log(id)

  const data = Object.fromEntries(new FormData(form))
  axios.patch(`/api/jobs/${id}`, data)
    .then(successResponse => {
      window.location = '/'
    })
    .catch(errorResponse => {
      document.querySelector('#error')
        .innerHTML = errorResponse.response.data.error
    })

}

getJob().then(renderEditJob)
