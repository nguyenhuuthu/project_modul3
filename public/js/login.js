// function onclickByItem() {
//   let email = document.getElementById("logemail");
//   let passWord = document.getElementById("logpass");

//   if (email && passWord == true){
//     console.log();
//   }

// }
// function onClickByItem() {
//   let email = document.getElementById("logemail");
//   let passWord = document.getElementById("logpass");
//   let checkRegex = true;
//   let checkEmail = validator(email);
//   let checkPassword = validatePassword(passWord);

//   if (
//     validateEmail(email.value) == null &&
//     email.value != null &&
//     email.value.length != 0
//   ) {
//     document.getElementById("error-email").innerHTML = "Sai định dạng email";
//     checkRegex = false;
//   }
//   if (checkRegex && checkPassword && checkEmail) {
//     Swal.fire({
//       icon: "success",
//       title: "đăng kí thành công",
//       showConfirmButton: false,
//       timer: 2500,
//     });
//   }
// }
// function validator(element) {
//   let valueEle = element.value;
//   let parent = element.parentNode;
//   let errElement = parent.querySelector(".error");
//   if (valueEle == null || valueEle.length == 0) {
//     errElement.innerHTML = "Thông tin không được để trống";
//     return false;
//   } else {
//     errElement.innerHTML = "";
//     return true;
//   }
// }
// const validateEmail = (email) => {
//   return String(email)
//     .toLowerCase()
//     .match(
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     );
// };
