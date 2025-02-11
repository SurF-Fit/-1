let elem1 = document.querySelector(".case1");
let elem2 = document.querySelector(".case2");

document.querySelector('#rev').addEventListener('click', function() {
    document.querySelector('.Reviews').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('#FU').addEventListener('click', function() {
    document.querySelector('.ForUs').scrollIntoView({ behavior: 'smooth' });
});

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector(".delivery").onclick = function(){
        elem1.classList.toggle("none");
    }
    document.querySelector(".pickup").onclick = function(){
        elem2.classList.toggle("flex");
    }
});

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("#reserch").onclick = function(){
        document.querySelector(".icon").classList.contains("none") ?
            document.querySelector(".icon").classList.remove("none"):
            document.querySelector(".icon").classList.add("none");
        document.querySelector(".res").classList.contains("flex") ?
            document.querySelector(".res").classList.remove("flex"):
            document.querySelector(".res").classList.add("flex");
    }
    document.querySelector("#res1").onmouseleave = function(){
        document.querySelector(".icon").classList.remove("none");
        document.querySelector(".res").classList.remove("flex");
    }
});

window.addEventListener('scroll', function() {
        if(scrollY >= 500){
            document.querySelector(".anchor").classList.add("anchorNew");
            document.querySelector(".anchor").classList.remove("anchor");
        }
        else if(scrollY < 500){
            document.querySelector(".anchorNew").classList.add("anchor");
            document.querySelector(".anchorNew").classList.remove("anchorNew");
        }
    }
)

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector(".burger").onclick = function(){
        document.querySelector(".navBurger").classList.contains("active") ?
            document.querySelector(".navBurger").classList.remove("active"):
            document.querySelector(".navBurger").classList.add("active");
    }
    document.querySelector(".navBurger").onclick = function () {
        document.querySelector(".navBurger").classList.contains("active") ?
            document.querySelector(".navBurger").classList.remove("active"):
            document.querySelector(".navBurger").classList.add("active");
    }
});





