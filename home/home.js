
let body = document.querySelector('body')
let images = document.getElementById("carusel")
let leftBtn = document.getElementById("left")
let rightBtn = document.getElementById("right")

let img = document.querySelectorAll("#carusel #img")

let index = 0
function changeImg(){
    if(index > img.length -1){
        index = 0
    }
    else if(index < 0){
        index = img.length -1
    }
    images.style.transform = `translateX(${index * -100}%)`

}



rightBtn.addEventListener("click", function(){
    index++
    changeImg()
    resetInterval()
})
leftBtn.addEventListener("click", function(){
    index--
    changeImg()
    resetInterval()
})
// let interval = setInterval(run, 3000)

// function run(){
//     index++
//     changeImg()
// }
// function resetInterval(){
//     clearInterval(interval)

//     let interval = setInterval(run, 3000)
// }
