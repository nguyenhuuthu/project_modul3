let lessonList = document.getElementsByClassName("session-list")[0]
let itemLesson = document.getElementsByClassName("items-list")[0]
let btn = document.getElementsByClassName("btn-start")[0]
let upload = document.getElementsByClassName("video-list")[0]
// let itemList = document.getElementsByClassName("item-content")[0]
// console.log(itemList);
let itemContent=document.querySelectorAll(".item-content")
let img=document.getElementsByClassName("video")[0]




itemContent.forEach((e)=>{
    e.onclick=(event)=>{
       let video = document.getElementsByClassName("video")[0] //.src='https://player.vimeo.com/progressive_redirect/playback/723688128/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=fc6c75b0da793efb1a97c087aee465ac7d9d83604d41f7b1e9348c13d487906c'
        console.log(video)
    }
})

lessonList.addEventListener("click", (e) => {
    // console.log(e.target.children[1].children[0])
    if(!e.target.children[1].classList.contains("off")){
        e.target.children[1].classList.add("off")
       
    } else{
        e.target.children[1].classList.remove("off")
    }
})




