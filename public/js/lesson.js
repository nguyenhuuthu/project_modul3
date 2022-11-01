let lessonList = document.getElementsByClassName("session-list")[0]
console.log(lessonList);
let itemLesson = document.getElementsByClassName("items-list")[0]
let btn = document.getElementsByClassName("btn-start")[0]
console.log(btn);

lessonList.addEventListener("click", (e) => {
    if(!e.target.children[1].classList.contains("off")){
        e.target.children[1].classList.add("off")
    } else if (e.target.children[1].classList.contains("off")){
        e.target.children[1].classList.remove("off")
    }
})