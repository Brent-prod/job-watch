function renderEvents() {
  document.querySelector('#page').innerHTML = `
  <section class="events">
    <div>${events()}</div>
  </section>
  `
}

function events() {
  const jobs = state.jobs
  return jobs.map(job => `
  <section class="job" data-id=${job.id}>
    <header>
      <h2>${job.role} - ${job.company}</h2>
    </header>
    <ul>
      <li>Close date: ${job.close_date.slice(0,10)}</li>
      <li>Contact: ${job.contact}</li>
      <li>Notes: ${job.notes}</li>
      <li>Status: ${job.status}</li>
    </ul>
  </section>
  `).join('')
}

function compareDates() {
  const currentDate = new Date()
  const jobDates = state.jobs.map(job => new Date((job.close_date).slice(0,10)))

  for (let i = 0; i < jobDates.length; i++) {
    if (dateDiffInDays(currentDate, jobDates[i]) <= 7) {
      document.querySelector(`[data-id='${state.jobs[i].id}']`)
        .style.border = "3px solid red"
    }
  }
}


// a and b are javascript Date objects
function dateDiffInDays(currentDate, closeDate) {
  // Discard the time and time-zone information.
  const msPerDay = 1000 * 60 * 60 * 24;

  const utc1 = Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
  const utc2 = Date.UTC(closeDate.getFullYear(), closeDate.getMonth(), closeDate.getDate());


  return Math.floor((utc2 - utc1) / msPerDay);
}
