
const hamburgerButton = document.querySelector(".nav-toggler")
const navigation = document.querySelector("nav")
const title = document.querySelector("h1")

window.onload = ()=> {

    hamburgerButton.addEventListener("click", togglerNav)

    function togglerNav(){
    hamburgerButton.classList.toggle("active");
    navigation.classList.toggle("active");
    title.classList.toggle("active");
    }
    
}




