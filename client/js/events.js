function renderEvents() {
  document.querySelector('#page').innerHTML = `
  <section class="events">
    <div>${events()}</div>
  </section>
  `
}

// Show cards for each job posting showing minimal details
function events() {
  const jobs = state.jobs
  return jobs.map(job => `
  <section class="job" data-id=${job.id}>
    <header>
      <h2>${job.role} - ${job.company}</h2>
    </header>
    <ul>
      <li>Close date: ${job.close_date.slice(0, 10)}</li>
      <li>Contact: ${job.contact}</li>
      <li>Notes: ${job.notes}</li>
      <li>Status: ${job.status}</li>
    </ul>
  </section>
  `).join('')
}

function compareDates() {
  const currentDate = new Date()
  const jobDates = state.jobs.map(job => new Date((job.close_date).slice(0, 10)))

  for (let i = 0; i < jobDates.length; i++) {
    if (dateDiffInDays(currentDate, jobDates[i]) <= 7) {
      // Change border to red
      const chosenEvent = document.querySelector(`[data-id='${state.jobs[i].id}']`)
      chosenEvent.style.border = "3px solid red"
      // Add warning message
      const warningMsg = document.createElement("span")
      warningMsg.className = "warning"
      warningMsg.innerHTML = "Closing soon!"
      chosenEvent.appendChild(warningMsg)
    }
  }
}

function dateDiffInDays(currentDate, closeDate) {
  const msPerDay = 1000 * 60 * 60 * 24;

  // Get dates in milliseconds
  const utc1 = Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
  const utc2 = Date.UTC(closeDate.getFullYear(), closeDate.getMonth(), closeDate.getDate());

  // Get difference between the 2 dates in days
  return Math.floor((utc2 - utc1) / msPerDay);
}

compareDates()