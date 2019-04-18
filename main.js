window.onload = init;

function init() {

    document.querySelector('.redsox')
        .addEventListener('click', toggleRedSox);
    document.querySelector('.mets')
        .addEventListener('click', toggleMets);
    document.querySelector('.yankees')
        .addEventListener('click', toggleYankees);

}

function toggleRedSox(event) {
    event.preventDefault();
    const app = document.querySelector('.table');
    const header = document.querySelector('.header');

    header.innerText = data[1].nicknames[Math.ceil(Math.random() * data[1].nicknames.length) - 1];
    header.classList.remove('mets');
    header.classList.remove('yankees');
    header.classList.add('redsox');

    app.classList.remove('mets');
    app.classList.remove('yankees');
    app.classList.add('redsox');
    DisplayTable(1);
}

function toggleMets(event) {
    event.preventDefault();
    const app = document.querySelector('.table');
    const header = document.querySelector('.header');
    
    header.innerText = data[2].nicknames[Math.ceil(Math.random() * data[2].nicknames.length) - 1];
    header.classList.remove('redsox');
    header.classList.remove('yankees');
    header.classList.add('mets');

    app.classList.remove('redsox');
    app.classList.remove('yankees');
    app.classList.add('mets');
    DisplayTable(2);
}

function toggleYankees(event) {
    event.preventDefault();
    const app = document.querySelector('.table');
    const header = document.querySelector('.header');
    
    header.innerText = data[0].nicknames[Math.ceil(Math.random() * data[0].nicknames.length) - 1];
    header.classList.remove('mets');
    header.classList.remove('redsox');
    header.classList.add('yankees');

    app.classList.remove('mets');
    app.classList.remove('redsox');
    app.classList.add('yankees');
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
