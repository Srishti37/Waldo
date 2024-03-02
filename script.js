var hamburger= document.getElementById("hamburger");
var sideNav= document.querySelector(".side-nav");
let slider = document.querySelector(".slider")

hamburger.onclick = function(){
    let classNames = hamburger.classList;
    classNames.toggle("open-menu");
        if(classNames.contains("open-menu")){
            classNames.remove("hamburger");
            sideNav.style.right= "0";

        }else{
            classNames.add("hamburger");
            sideNav.style.right= "-992px";
        }
}


