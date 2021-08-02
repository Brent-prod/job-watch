function renderHeaderNav() {
  document.querySelector("#header-nav").innerHTML = `
  <nav>
    <h1>JobWatch - Eyes on the Prize</h1>

    <ul>
      <li class="material-icons work" onclick="render('jobList')">work</li> 
    </ul>
  </nav>
  `;
}

renderHeaderNav();

function render(component) {
  if (component === "jobList") {
    renderAddJob();
  }
}
