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

//variables
//html reviews, start with hardcoded text, fill with API data
let rev1=document.querySelector("#rev1");
let rev2=document.querySelector("#rev2");
let rev3=document.querySelector("#rev3");
//star rating
let stars1=document.querySelector("#stars1");
let stars2=document.querySelector("#stars2");
let stars3=document.querySelector("#stars3");
//months age of review
let revDate1=document.querySelector("#revDate1");
let revDate2=document.querySelector("#revDate2");
let revDate3=document.querySelector("#revDate3");
//stores JSON reviews
let reviewJson;
//list containing review objects
let reviewList;
//new request object
let request= new XMLHttpRequest();

//open call on API address
request.open("GET", "https://maps.googleapis.com/maps/api/place/details/json?fields=review&key=AIzaSyBYZMSmO_lrxaddKipkStuvMAvuaDJoU4E&place_id=ChIJpXnxQt5DkFQR9N3bOgj-piU");
request.send();
//when JSON returned
request.onload=()=>{
    //test what is returned
    console.log(request);
    if(request.status==200){
        console.log("Response done");
        reviewJson=JSON.parse(request.response);
        console.log(reviewJson);
        reviewList=reviewJson.result.reviews;
        console.log(reviewList[0]);

        //fill review html elements on dom with API data
        rev1.innerHTML=reviewList[0].text;
    } else{
        console.log("error")
    }
}

// console.log(reviewJson.result);