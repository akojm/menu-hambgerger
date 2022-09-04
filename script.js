const hamburgerButton = document.querySelector(".nav-toggler")
const navigation = document.querySelector("nav")
const title = document.querySelector("h1")

window.onload = ()=> {

 hamburgerButton.addEventListener("click", toggleNav)

    function toggleNav(){
    hamburgerButton.classList.toggle("active");
    navigation.classList.toggle("active");
    title.classList.toggle("active");
    }
    
}




