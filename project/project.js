import { prophetsElement, prophetList, displayProphets, getProphets } from "./ModuleProject.js";




function clear(){
    const profeta = prophetsElement.querySelectorAll(`profeta`);
    profeta.forEach((profeta) => {prophetsElement.removeChild(profeta)});
};

let fullName = `Jamner Ruiz`;
const nameElement = document.getElementById(`name`);
nameElement.innerHTML = `<strong>${fullName}</strong>`;

let projectName = `Program to Sort Prophets`
const prophetName = document.getElementById(`name2`);
prophetName.innerHTML = `<strong>${projectName}</strong>`


function sortBy (prophets){
    clear();

    const filter = document.getElementById(`sortBy`).value;

    console.log(filter);
    switch(filter){
        case "utah":
            console.log(`utah`);
            const Utahp = prophets.filter(function (prophet) {return prophet.born.toLowerCase().includes("utah")});
            console.log(Utahp);
            displayProphets(Utahp);
            break; 
        case "notutah":
            console.log(`notutah`);
            const Notutahp = prophets.filter(function (prophet) {return !prophet.born.toLowerCase().includes("utah")});
            displayProphets(Notutahp);
            break;
        case "older":
            console.log(prophets);
            const OlderP = prophets.filter(function(prophet) {return (prophet.age) >50});
            console.log(`older`, OlderP);
            displayProphets(OlderP);
            break;
        case "younger":
            console.log(prophets);
            const YoungerP = prophets.filter(function (prophet) {return (prophet.age) < 50});
            console.log(`younger`, YoungerP);
            displayProphets(YoungerP);
            break;
        case "all":
            displayProphets(prophets);
            break;
    }
};



document.querySelector("#sortBy").addEventListener(`change`, () => {sortBy(prophetList) });
getProphets();