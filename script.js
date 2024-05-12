let image = document.getElementById("bg-img");

window.addEventListener("scroll", ()=>{
    updateImage()
})

function updateImage(){
    // image.style.opacity = 1 - window.pageYOffset / 800;
    image.style.backgroundSize = 120 - window.pageYOffset/12 + "%"
}