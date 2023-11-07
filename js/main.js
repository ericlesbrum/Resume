import {
    CreateNavegationContent,
    CreateAboutContent,
    CreateSkillsContent,
    CreatePortfolioContent,
    CreateExperienceCard
} from "./components.js";
// pegar referencia dos elementos
const about = document.querySelector("#about");
const navegation = document.querySelector("#navegation");
const skills = document.querySelector("#skills");
const experience = document.querySelector("#experience");
const portfolio = document.querySelector("#portfolio");
const contacts = document.querySelector("#contacts");
const language = document.querySelector("#language");
var dataJson = null;
var languageValue = language.value;

// quando mudar
language.addEventListener("change", (e) => {
    languageValue = e.target.value;
    CreateAllElements(dataJson, languageValue)
})

fetch('../data/pageContent.json')
    .then(response => response.json())
    .then(json => {
        dataJson = json;
        CreateAllElements(json,languageValue);
    });

function CreateAllElements(data, languageValue) {
    navegation.innerHTML = CreateNavegationContent(data["nav"], languageValue);
    about.innerHTML = CreateAboutContent(data["about"], languageValue);
    skills.innerHTML = CreateSkillsContent(data["skills"], languageValue);
    experience.innerHTML = CreateExperienceCard(data["experience"], languageValue);
    portfolio.innerHTML = CreatePortfolioContent(data["portfolio"], languageValue)
}