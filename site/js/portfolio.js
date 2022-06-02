/*==== Change avatar ====*/
const avatar = document.querySelector(".avatar");
avatar.addEventListener("click", function(){
    avatar.src = "image/avatar.svg";
});





/**==== Change the name and color ====/ */
const myName = document.querySelector("#name");
const button = document.querySelector(".button")
const pinkBg = document.querySelectorAll(".pink-bg");
const pinkText = document.querySelectorAll(".pink-text")

button.addEventListener("click", function(){
    const userName = prompt("What's your name?");
    const color = prompt("Choose your color.")
    myName.innerHTML = userName;
    myName.style.color = "white";
    for(let i = 0; i < pinkBg.length; i++){
        pinkBg[i].style.backgroundColor = color
    }
    button.style.backgroundColor = color
    buttonTools.style.backgroundColor = color
    for(let j = 0; j < pinkText.length; j++){
        pinkText[j].style.color = color
    }   
})




/*==== Change the value for li ====*/ 
const devTools = document.querySelectorAll("#front-dev-tools li");
const buttonTools = document.querySelector(".button-tools");
const myTools = ["VSCode", "Github", "Terminal"];
buttonTools.addEventListener("click", function(){
    for(let i = 0; i < devTools.length; i++){
        devTools[i].innerHTML = myTools[i]
    }
})




/*==== Add skills ====*/
const buttonInput = document.querySelector("#bouton");
const skill = document.querySelector(".skill ul")
buttonInput.addEventListener("click", function(event){
        event.preventDefault();
        const input = document.querySelector("#input").value;
        const li = document.createElement("li");
        li.innerHTML = input 
        skill.appendChild(li);
         
})




/*==== change color of link ====*/
const link = document.querySelectorAll(".link");
for(let i in link){
    link[i].addEventListener("mouseover", function(event){
        link[i].style.color = "#750ff7";
    })
    link[i].addEventListener("mouseleave", function(event){
        link[i].style.color = "black";
    })
}
