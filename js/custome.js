window.addEventListener("scroll", function(){
    if(this.window.scrollY>500){
        nav.classList.add("sticky");
    }else{
        nav.classList.remove("sticky");
    }
})

document.getElementById("side-nav-open-btn").onclick = function(){
    document.getElementById("sub-menu").style.left = "0%";
}
document.getElementById("close").onclick = function(){
    document.getElementById("sub-menu").style.left = "-100%";
}
