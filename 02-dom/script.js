const changeThemeButton = document.querySelector("#changeThemeButton");
// listen for the click event on the change theme button
changeThemeButton.addEventListener("click", function(){
    
// Select the first H1 in document
// and change its color to red

// document -> entire DOM
// querySelector -> select one element
const header = document.querySelector("h1");
header.style.color = "red";

// document -> entire DOM
// querySelectorAll -> select many elements
const allTheHeaders = document.querySelectorAll("h3");
allTheHeaders[1].style.backgroundColor = "yellow";

const soup = document.querySelector("span");
soup.innerHTML = "Soup with Lots of Meat";

// select the element with ID `title` and assign it to in the `titleElement` variable
const titleElement = document.querySelector("#title");
titleElement.style.backgroundColor = "orange";

const specials = document.querySelectorAll(".special");

// a for loop allows us to extract one item at a time from an array
for (let eachSpecial of specials) {
    eachSpecial.style.backgroundColor = "yellow";
}

document.querySelector("#special-title").innerText = "<span>Specials of the Week</span>";
document.querySelector("#quote-of-the-week").innerHTML = "<blockquote><h1>She Sells Seashell on the Seashore</h1></blockquote>";
});



