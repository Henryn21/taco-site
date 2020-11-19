//Dropdown menu functionality
let ddButton = document.querySelector("#dropDownButton");
let ddMenu = document.querySelector("#dropDownMenuBox");
console.log(ddButton);
//change = to X and vice versa, set dropdown display to block or none
function symbolSwitcher(){
    if(ddButton.innerHTML=="="){
        ddButton.innerHTML="x";
        ddMenu.style.display="block";
    }
    else{
        ddButton.innerHTML="=";
        ddMenu.style.display="none";
    }
}
ddButton.addEventListener("click", symbolSwitcher);
