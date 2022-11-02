console.log("Hello world");
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

// formSignin.addEventListener("click", function (e) {
//     e.preventDefault();
//     let email = formLogin.loginEmail.value;
//     let password = formLogin.loginPassword.value;
//     let data = {
//         email,
//         password,
//         };
//     fetch(serverUrl + "auth/login", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//           },
//         body: JSON.stringify(data),
//     })
//     .then((res) => res.json())
//     .then((data) => {
//         if(data.status === "success"){
//             window.location.href = "/";
//           }
//     })
//     .catch((err) => console.log(err))
// })


