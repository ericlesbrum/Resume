import { CreateExperienceCard,CreatePortfolioCard } from "./cards.js";
import { createLiElement } from "./elements.js";
function CreateNavegationContent(data, languageValue) {
    return `
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="#">${data[languageValue]["home"]}</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">${data[languageValue]["skills"]}</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">${data[languageValue]["experience"]}</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">${data[languageValue]["portfolio"]}</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">${data[languageValue]["contacts"]}</a>
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

function CreateSkillsContent(data, languageValue) {
    let body = `
        <h3 class="mb-2 text-center">${data["title"][languageValue]}</h3>
        <ul>
            ${createLiElement(data["tech"])}
        </ul>
        `
    return body;
}

function CreatePortfolioContent(data, languageValue) {
    let cards = "";
    data.forEach((element, index) => {
        cards += CreatePortfolioCard(element, languageValue);
    });
    return `
        <h3 class="mb-2 text-center">PORTFOLIO</h3>
        <div class="row">
            ${cards}
        </div>
        
    `;
}



export {
    CreateNavegationContent,
    CreateAboutContent,
    CreateSkillsContent,
    CreateExperienceCard,
    CreatePortfolioContent
}