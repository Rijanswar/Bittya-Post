// let navbar = document.getElementById("nav");
window.addEventListener("scroll", function(){
    if(this.window.scrollY>500){
        nav.classList.add("sticky");
    }else{
        nav.classList.remove("sticky");
    }
})
