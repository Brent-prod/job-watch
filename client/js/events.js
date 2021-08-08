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
  const jobDates = state.jobs.map(job => new Date(job.close_date).toISOString().slice(0,10))
  
  return jobDates
}