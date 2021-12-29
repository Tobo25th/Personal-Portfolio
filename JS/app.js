var mouse = document.getElementById('mouse');
mouse.addEventListener("click",function(){
mouse.classList.add("animate__animated","animate__rotateIn");
})
mouse.addEventListener("animationend",function () {
    mouse.classList.remove("animate__animated","animate__rotateIn");
})