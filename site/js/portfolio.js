console.log("connecté");
const avatar = document.querySelector(".avatar");
avatar.addEventListener("click", function(){
    avatar.src = "image/avatar.svg"
});

const myName = document.querySelector("#name");
const userName = prompt("What's your name?");
myName.innerHTML = userName;
myName.style.color = "white";