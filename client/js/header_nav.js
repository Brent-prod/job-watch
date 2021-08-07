function renderHeaderNav() {
  document.querySelector("#header-nav").innerHTML = `
  <nav>
    <h1>JobWatch</h1>

    <ul>
      <li class="material-icons work" onclick="render('addJob')">work</li> 
      <li class="material-icons list" onclick="render('jobList')">list</li> 
    </ul>
  </nav>
  `;
}
// <li id="button" class="material-icons work" onclick="render('jobList')">work</li> 

renderHeaderNav();

function render(component) {
  if (component === "addJob") {
    renderAddJob();
  } else if (component === "jobList") {
    renderJobsList();
  }
}

const button = document.querySelector('#button')
let clicked = false

button.addEventListener('click', () => {
  if (clicked) {
    render("jobList")
    clicked = false

  } else {
    document.querySelector('#page').innerHTML = ""
    clicked = true
  }
})

