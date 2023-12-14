//

const prophetsElement = document.getElementById(`prophets`);
let prophetList = [];

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        const profeta = document.createElement(`profeta`);
        const H3 = document.createElement(`h3`);
        H3.textContent = prophet.prophetName;
        const img = document.createElement(`img`);
        img.src = prophet.imageUrl;
        img.alt = prophet.born;
        
        profeta.appendChild(H3);
        profeta.appendChild(img);
        prophetsElement.appendChild(profeta);
    })
};

const getProphets = async () => {
    const answer = await fetch(`../scripts/prophets.json`);
    prophetList = await answer.json();
    displayProphets(prophetList);
};

export {prophetsElement, prophetList, displayProphets, getProphets};