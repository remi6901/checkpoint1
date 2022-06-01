console.log("connecté");
const avatar = document.querySelector(".avatar");
avatar.addEventListener("click", function(){
    avatar.src = "image/avatar.svg"
});

const myName = document.querySelector("#name");
const button = document.querySelector(".button")
const background = document.querySelector(".pink-bg")
button.addEventListener("click", function(){
    const userName = prompt("What's your name?");
    myName.innerHTML = userName;
    myName.style.color = "white";
    background.style.backgroundColor = "#750ff7"
    button.style.backgroundColor = "#750ff7"
})

