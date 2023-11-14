import { createLiElement, GetDateInfo } from "./elements.js";
function CreateExperienceCard(data, languageValue) {
    let body = `<h3 class="text-center mb-2">${data["title"][languageValue]}</h3>`;
    body += `<div class="row">`
    data["data"].forEach(element => {
        body += `
        <div class="card mb-3">
            <div class="card-body">
                <div class="card-title">
                    <h4>${element['occupation']}</h3>
                    <h5>${element['company']}</h4>
                </div>
                <div class="card-text">
                    <div>
                        <span>${element['firstDay']}</span>
                        <span>-</span>
                        <span>${GetDateInfo(element['lastDay'],languageValue)}</span>
                    </div>
                    <div>
                        <p>${element['description'][languageValue]}</p>
                    </div>
                    <div>
                        <ul>
                            ${createLiElement(element["skills_used"])}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `
    });
    body += "</div>"
    return body;
}

function CreatePortfolioCard(data, languageValue) {
    return `
    <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
        <div class="card">
            <div class="card-body">
                <div class="card-title">
                    <h4 class="text-center ">${data["projectName"]}</h4>
                </div>
                <img class="card-img" src="${data["image"]}" alt="Card image" style="width:100%">
                <div>
                    <p>
                        ${data["description"][languageValue]}
                    </p>
                    <ul>
                        ${createLiElement(data["tech"])}
                    </ul>
                </div>
            </div>
        </div>
    </div>
    `
}

function CreateSkillCard(data) {
    return `
    <div class="card col-sm-12 col-md-4 col-lg-3">
        <div class="card-body">
            <span>
                ${data}
            </span>
        </div>
    </div>
    `;
}

export {
    CreateExperienceCard,
    CreatePortfolioCard,
    CreateSkillCard
}