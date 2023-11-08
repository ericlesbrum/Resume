import { CreateExperienceCard, CreatePortfolioCard, CreateSkillCard } from "./cards.js";
import { createLiElement, createButtonElement } from "./elements.js";
const typeOfProject = [];

function CreateNavegationContent(data, languageValue) {
    return `
        <ul class="navbar-nav">
            <li class="nav-item" id="navegationItem">
                <a class="nav-link" href="javascript:void(0);">${data[languageValue]["home"]}</a>
            </li>
            <li class="nav-item" id="navegationItem">
                <a class="nav-link" href="javascript:void(0);">${data[languageValue]["skills"]}</a>
            </li>
            <li class="nav-item" id="navegationItem">
                <a class="nav-link" href="javascript:void(0);">${data[languageValue]["experience"]}</a>
            </li>
            <li class="nav-item" id="navegationItem">
                <a class="nav-link" href="javascript:void(0);">${data[languageValue]["portfolio"]}</a>
            </li>
            <li class="nav-item" id="navegationItem">
                <a class="nav-link" href="javascript:void(0);">${data[languageValue]["contacts"]}</a>
            </li>
        </ul>
    `
}

function CreateAboutContent(data, languageValue) {
    return `
        <h3 class="mb-2 text-center">${data["title"][languageValue]}</h3>
        <p>
            ${data["description"][languageValue]}
        </p>
    `;
}
// ${createLiElement(data["tech"])}
function CreateSkillsContent(data, languageValue) {
    let body = `
    <div class="row">
        <h3 class="mb-2 text-center col-sm-12">${data["title"][languageValue]}</h3>
        <div class="col-sm-12 row">
           ${CreateCards(data["tech"])}
        </div>
    </div>
    `
    return body;
}

function CreatePortfolioContent(data, languageValue, filter = null) {
    let cards = "";
    let filterBuffer = "";
    data.forEach((element) => {
        if (!typeOfProject.includes(element["type"]))
            typeOfProject.push(element["type"]);
    });
    if (filter === null)
        filterBuffer = typeOfProject[0];
    else {
        filterBuffer = filter;
    }
    data.forEach((element) => {
        if (element["type"] === filterBuffer) {
            cards += CreatePortfolioCard(element, languageValue);
        }
    });
    return `
    <div>
        <h3 class="mb-2 text-center">PORTFOLIO</h3>
        <div class="d-flex justify-content-center mb-3">${createButtonElement(typeOfProject)}</div>
        <div class="row">
            ${cards}
        </div>
    </div>
    `;
}


function CreateCards(data) {
    let cards = "";
    console.log
    data.forEach(element => {
        cards += CreateSkillCard(element);
    });
    return cards;
}

export {
    CreateNavegationContent,
    CreateAboutContent,
    CreateSkillsContent,
    CreateExperienceCard,
    CreatePortfolioContent
}