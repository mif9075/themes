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
}

function toggleMets(event) {
    event.preventDefault();
    const button = event.target;
    const header = document.querySelector('.header');
    const app = document.querySelector('.app');

    header.innerText = `New York Mets`;
    DisplayTable(2)
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
    const worldSeriesTD = document.querySelector('#worldseries');
    const worldSeriesData = document.createElement('p');

    // for (let i = 0; i < data.length; i++){
    // for(let j = 0; j < data[yankee].worldseries.length; j++){
    worldSeriesData.innerText = data[team].worldseries;
    worldSeriesTD.appendChild(worldSeriesData)

}

// const pennantsTD = document.querySelector('#pennants');
// const pennantsData = document.createElement('td');

// const divisionTD = document.querySelector('#division');
// const divisionData = document.createElement('td');

// const wildcardTD = document.querySelector('#wildcard');
// const wildcardData = document.createElement('td');

// }

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