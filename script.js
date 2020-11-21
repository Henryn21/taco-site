//Dropdown menu functionality
//html element variables
let ddButton = document.querySelector("#dropDownButton");
let ddMenu = document.querySelector("#dropDownMenuBox");
//change = to X and vice versa, set dropdown display to block or none
function ddDisplaySwitcher(){
    if(ddButton.innerHTML=="="){
        ddButton.innerHTML="x";
        ddMenu.style.display="block";
    }
    else{
        ddButton.innerHTML="=";
        ddMenu.style.display="none";
    }
}
ddButton.addEventListener("click", ddDisplaySwitcher);

//google reviews from API