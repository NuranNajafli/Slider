let images = document.getElementsByTagName("img");
let next = document.getElementById("next")
let prev = document.getElementById("prev")
let index=0;

next.addEventListener("click", ()=>{
    index++;
    if(index>images.length-1){
        index=0;
    }
    document.getElementsByClassName("show")[0].classList.remove("show")
    images[index].classList.add("show")

})

prev.addEventListener("click", ()=>{
    index--;
    if(index<0 ){
        index=images.length-1
    }
    document.getElementsByClassName("show")[0].classList.remove("show")
    images[index].classList.add("show")
})