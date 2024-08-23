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

let searchBtn = document.getElementById("search-btn");
let searchBox = document.getElementById("search-box");

searchBtn.addEventListener("click", function(){
    if (searchBox.style.display == "none" ) {
        searchBox.style.display = "block"; 
    } else {
        searchBox.style.display = "none"; 
    }

})


