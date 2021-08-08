function getUser() {
  axios.get("/api/sessions").then((sessionInfo) => {
    if (sessionInfo.data.userName) {
      // if logged in
      state.user = sessionInfo.data.userName;
      document.querySelector("#userName").innerHTML =
        "Welcome " +
        sessionInfo.data.userName +
        '<br><button id="logout">Logout</button>';
      document.querySelector("#login").style.display = "none";

      // to make a delete request to log out a user=
      document.querySelector("#logout").addEventListener("click", (event) => {
        axios.delete("/api/sessions").then(() => {
          window.location = "/index.html";
        });
      });
      // if not logged in
    } else {
      document.querySelector("#userName").innerHTML = sessionInfo.data.error;
    }
  });
}

getUser();
