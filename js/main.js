import {
    CreateNavegationContent,
    CreateAboutContent,
    CreateSkillsContent,
    CreatePortfolioContent,
    CreateExperienceTimeline,
    CreatePortfolioCards
} from "./components.js";

const language = document.querySelector("#language");
const about = document.querySelector("#about");
const navegation = document.querySelector("#listNav");
const skills = document.querySelector("#skills");
const experience = document.querySelector("#experience");
const portfolio = document.querySelector("#portfolio");
const contacts = document.querySelector("#contacts");

var dataJson = null;

language.addEventListener("change", (e) => {
    CreateAllElements(dataJson)
})

fetch('../data/pageContent.json')
    .then(response => response.json())
    .then(json => {
        dataJson = json;
        CreateAllElements(dataJson);
    });

function CreateAllElements(data) {
    navegation.innerHTML = CreateNavegationContent(data["nav"], language.value);
    about.innerHTML = CreateAboutContent(data["about"], language.value);
    skills.innerHTML = CreateSkillsContent(data["skills"], language.value);
    experience.innerHTML = CreateExperienceTimeline(data["experience"], language.value);
    portfolio.innerHTML = CreatePortfolioContent(data["portfolio"]);
    CreatePortfolioCards(data["portfolio"],language.value,data["portfolio"][0]["type"]);
    ShowProjectPerTypeOfProject(data)
}

function ShowProjectPerTypeOfProject(data) {
    let buttons = document.querySelectorAll(".botoes");
    buttons.forEach(element => {
        element.addEventListener("click", () => {
            CreatePortfolioCards(data["portfolio"],language.value,element.innerHTML);
        })
    });
}