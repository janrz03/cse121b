/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];
/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
        const newArticle = document.createElement("article");
        const idH3 = document.createElement("h3");
        idH3.textContent = temple.templeName;
        const newImage = document.createElement("img");
        newImage.src = temple.imageUrl;
        newImage.alt = temple.location;
        newArticle.appendChild(idH3);
        newArticle.appendChild(newImage);
        templesElement.appendChild(newArticle);
    });
};



/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
        templeList = await response.json();
        displayTemples(templeList);
        //console.log(templeList);

    };
/* reset Function */
function reset() {
    const newArticles = templesElement.querySelectorAll("article");
    newArticles.forEach((article) => {templesElement.removeChild(article);
    });
};

/* sortBy Function */
function sortBy (temples) {
    reset();
    
    const filter = document.getElementById("sortBy").value;
    
    console.log(filter);
    switch(filter){
        case "utah":
            console.log("utah");
            const utahT = temples.filter(function (temple) {return temple.location.toLowerCase().includes("utah")}
            );
            console.log(utahT);
            displayTemples(utahT);
            break;
        case "notutah":
            console.log("notutah");
            const notutahT = temples.filter(function (temple) {
                return !temple.location.toLowerCase().includes("utah")}
            );
            displayTemples(notutahT);
            break;
        case "older":
            console.log(temples)
            const olderT = temples.filter(function (temple){return new Date(temple.dedicated) < new Date(1950, 0, 1)}
            );
            console.log("older", olderT);
            displayTemples(olderT);
            break;
        case "all":
            displayTemples(temples);
            break;
        
    }
};



/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {sortBy(templeList) });
getTemples();


getTemples();