import { CreateExperienceCard, CreatePortfolioCard, CreateSkillCard } from "./cards.js";
import { createButtonElement } from "./elements.js";

function CreateNavegationContent(data, languageValue) {
    return `
        <li class="nav-item">
            <a class="nav-link" href="#about">${data[languageValue]["home"]}</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#skills">${data[languageValue]["skills"]}</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#experience">${data[languageValue]["experience"]}</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#portfolio">${data[languageValue]["portfolio"]}</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#contacts">${data[languageValue]["contacts"]}</a>
        </li>
    </div>
    `
}

function CreateAboutContent(data, languageValue) {
    return `
        <div class="w-100">
            <h3 class="mb-2 text-center">${data["title"][languageValue]}</h3>
            <p>
                ${data["description"][languageValue]}
            </p>
        </div>
    `;
}

function CreateSkillsContent(data, languageValue) {
    let body = `
    <div class="">
        <h3 class="mb-2 text-center ">${data["title"][languageValue]}</h3>
        <div class="w-100 row">
           ${CreateCardsSkills(data["tech"])}
        </div>
    </div>
    `
    return body;
}

function CreatePortfolioContent(data) {
    let typeOfProject = [];
    data.forEach((element) => {
        if (!typeOfProject.includes(element["type"]))
            typeOfProject.push(element["type"]);
    });
    return `
    <div class="w-100">
        <h3 class="mb-2 text-center">Portfolio</h3>
        <div class="d-flex justify-content-center mb-3">${createButtonElement(typeOfProject)}</div>
        <div class="row" id="portfolioCards">
        </div>
    </div>
    `;
}

function CreatePortfolioCards(data, languageValue, typeofContent) {
    const result = data.filter(element => typeofContent === element["type"]);
    let portfolioCards = document.querySelector("#portfolioCards");
    let body = "";
    result.forEach(element => {
        body += CreatePortfolioCard(element, languageValue);
    });
    portfolioCards.innerHTML = body;
}

function CreateCardsSkills(data) {
    let cards = "";
    data.forEach(element => {
        cards += CreateSkillCard(element);
    });
    return cards;
}

function CreateExperienceTimeline(data, language) {
    return `
    <div class="">
        ${CreateExperienceCard(data, language)}
    </div>
    `;
}

export {
    CreateNavegationContent,
    CreateAboutContent,
    CreateSkillsContent,
    CreateExperienceTimeline,
    CreatePortfolioContent,
    CreatePortfolioCards
}