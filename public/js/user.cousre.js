let lessonList = document.getElementsByClassName("session-list")[0];
let itemLesson = document.getElementsByClassName("items-list")[0];
let btn = document.getElementsByClassName("btn-start")[0];

lessonList.addEventListener("click", (e) => {
  if (!e.target.children[1].classList.contains("off")) {
    e.target.children[1].classList.add("off");
  } else if (e.target.children[1].classList.contains("off")) {
    e.target.children[1].classList.remove("off");
  }
});
