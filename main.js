window.onload = init;

function init() {
    // document.querySelector('.toggle-button')
    //     .addEventListener('click', toggleTheme);

    document.querySelector('.btn-redsox')
        .addEventListener('click', toggleRedSox);
    document.querySelector('.btn-mets')
        .addEventListener('click', toggleMets);
    document.querySelector('.btn-yankees')
        .addEventListener('click', toggleYankees);
}

function toggleRedSox(event) {
    event.preventDefault();
    const button = event.target;
    const header = document.querySelector('.header');
    const app = document.querySelector('.app');

    header.innerText = `Boston Red Sox`;
    DisplayTable(1);
}

function toggleMets(event) {
    event.preventDefault();
    const button = event.target;
    const header = document.querySelector('.header');
    const app = document.querySelector('.app');

    header.innerText = `New York Mets`;
    DisplayTable(2);
}

function toggleYankees(event) {
    event.preventDefault();
    const button = event.target;
    const header = document.querySelector('.header');
    const app = document.querySelector('.app');

    header.innerText = `New York Yankees`;
    DisplayTable(0);
}

function DisplayTable(team) {

    clearList();

    const worldSeriesTD = document.querySelector('#worldseries');
    const worldSeriesData = document.createElement('p');
    worldSeriesData.innerText = data[team].worldseries;
    worldSeriesTD.appendChild(worldSeriesData);

    const pennantsTD = document.querySelector('#pennants');
    const pennantsData = document.createElement('p');
    pennantsData.innerText = data[team].alpennants;
    pennantsTD.appendChild(pennantsData);

    const divisionTD = document.querySelector('#division');
    const divisionData = document.createElement('p');
    divisionData.innerText = data[team].eastdivisiontitles;
    divisionTD.appendChild(divisionData);

    const wildcardTD = document.querySelector('#wildcard');
    const wildcardData = document.createElement('p');
    wildcardData.innerText = data[team].wildcardberths;
    wildcardTD.appendChild(wildcardData);
}

function clearList() {
    event.preventDefault();
    removeAllChildrenOfOl();
}


function removeAllChildrenOfOl() {

    const ul = document.querySelector('#worldseries');

    while (ul.hasChildNodes()) {
        ul.removeChild(ul.firstChild);
    }

    const ol = document.querySelector('#pennants');

    while (ol.hasChildNodes()) {
        ol.removeChild(ol.firstChild);
    }

    const ol2 = document.querySelector('#division');

    while (ol2.hasChildNodes()) {
        ol2.removeChild(ol2.firstChild);
    }

    const ol3 = document.querySelector('#wildcard');

    while (ol3.hasChildNodes()) {
        ol3.removeChild(ol3.firstChild);
    }
}

// function toggleTheme(event) {
//     event.preventDefault();

//     const app = document.querySelector('.app');
//     const button = event.target;
//     const header = document.querySelector('.header');

//     app.classList.toggle('dark-theme');
//     button.classList.toggle('dark-theme');

//     button.innerText = button.innerText === 'SWITCH TO LIGHT MODE'
//         ? `SWITCH TO DARK MODE`
//         : `SWITCH TO LIGHT MODE`;

//     header.classList.replace('happy', 'mad');
//     header.innerText = `I'm angry that you're clicking things!`
// }