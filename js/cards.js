import { createLiElement } from "./elements.js";
function CreateExperienceCard(data, languageValue) {
    let body = `<h3 class="text-center mb-2">${data["title"][languageValue]}</h3>`;
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
                        <span>${element['lastDay']}</span>
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
    return body;
}

function CreatePortfolioCard(data, languageValue) {
    return `
    <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
        <div class="card">
            <div class="card-body">
                <div class="card-title">
                    <h4>${data["projectName"]}</h4>
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

export{
    CreateExperienceCard,
    CreatePortfolioCard
}