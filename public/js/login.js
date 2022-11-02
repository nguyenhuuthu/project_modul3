let serverUrl = "http://127.0.0.1:3000/"

let formLogin = document.getElementById("form-login");
let formSignin = document.getElementById("form-signin")


formLogin.addEventListener("submit", function (e) {
    e.preventDefault();
    // console.log(btnLogin);
    let email = formLogin.email.value;
    let password = formLogin.password.value;
    console.log(email,password);
    let data = {
        email: email,
        password: password,
        };
    fetch(serverUrl + "auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then((data) => {
        if(data.status === "success"){
            window.location.href = "/";
          }
    })
    .catch((err) => console.log(err))
  
})

formSignin.addEventListener("submit", function (e) {
    e.preventDefault();
    let name = formSignin.siginName.value;
    let email = formSignin.signEmail.value;
    let password = formSignin.signPassword.value;
    let data = {
        name: name,
        email: email,
        password: password,
        };
    fetch(serverUrl + "auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then((data) => {
        if(data.status === "success"){
            window.location.href = "/";
          }
    })
    .catch((err) => console.log(err))
})


