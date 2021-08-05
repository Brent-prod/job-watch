function renderHeaderNav() {
  document.querySelector("#header-nav").innerHTML = `
  <nav>
    <h1>Welcome to JobWatch</h1>

    <ul>
    <li id="button" class="material-icons work" >work</li> 

    </ul>
  </nav>
  `;
}
// <li id="button" class="material-icons work" onclick="render('jobList')">work</li> 

renderHeaderNav();

function render(component) {
  if (component === "jobList") {
    renderAddJob();
  }
}

const button = document.querySelector('#button')
let clicked = false

button.addEventListener('click', (event) => {
  console.log(event)
  if (clicked) {
    render("jobList")
    clicked = false

  } else {
    document.querySelector('#page').innerHTML = ""
    clicked = true
  }
})

