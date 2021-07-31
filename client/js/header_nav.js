function renderHeaderNav() {
  document.querySelector('#header-nav').innerHTML = `
  <nav>
  <h1>JobWatch - Eyes on the Prize</h1>

  <ul>
    <li class="material-icons jobs" onclick="render('jobList')"></li> 
  </ul>
</nav>
  `
}

renderHeaderNav()