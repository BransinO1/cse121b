/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (templeList) => {
    templeList.forEach((temple) => {
        const articleElement = document.createElement("article");
        const h3Element = document.createElement("h3");
        const imgElement = document.createElement("img");
        
        h3Element.textContent = temple.templeName;
        
        imgElement.src = temple.imageUrl;
        imgElement.alt = temple.location;
        
        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);
        
        templesElement.appendChild(articleElement);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    try {
        const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');

        templeList = await response.json();

        // Stretch to filter temples alphabetically
        templeList.sort((a, b) => a.templeName.localeCompare(b.templeName));

        displayTemples(templeList);
    } catch (error) {
        console.error('Error fetching temple data:', error);
    }
};
/* reset Function */
const reset = () => {
    templesElement.innerHTML = '';
};

/* filterTemples Function */
const filterTemples = (temples) => {
    reset();

    const filter = document.getElementById('filtered').value;

    switch (filter) {
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;
        case 'notutah':
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;
        case 'older':
            displayTemples(temples.filter(temple => {
                const dedicatedYear = parseInt(temple.dedicated.split(',')[0]);
                return dedicatedYear < 1950;
            }));
            break;
        case 'all':
            displayTemples(temples);
            break;
        default:
            console.error('Invalid filter value');
    }
};

getTemples();

/* Event Listener */
document.getElementById('filtered').addEventListener('change', () => {
    filterTemples(templeList);
});