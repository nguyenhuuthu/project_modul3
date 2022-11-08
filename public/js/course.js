let api = "https://127.0.0.1:3000/";
let a = document.getElementById("course-box");

a.addEventListener("click", function (e) {
  e.preventDefault();
  Swal.fire("Đăng kí thành công", "You clicked the button!", "success");
  window.location.href = "/userCourse";
});