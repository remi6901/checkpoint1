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

/*
const link = document.querySelectorAll(".link");
for(let i = 0; i < link.length; i++){
    link[i].addEventListener("mouseover", function(){
        link.style.color = "#750ff7"
    })
}*/

const devTools = document.querySelectorAll("#front-dev-tools li");
const buttonTools = document.querySelector(".button-tools");
const myTools = ["VSCode", "Github", "Terminal"];
buttonTools.addEventListener("click", function(){
    for(let i = 0; i < devTools.length; i++){
        devTools[i].innerHTML = "toto"
    }
})



