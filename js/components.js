//criar
function CreateNavegationContent(data,languageValue) {
    return `
        <ul>
            <li>${data[languageValue]["home"]}</li>
            <li>${data[languageValue]["skills"]}</li>
            <li>${data[languageValue]["experience"]}</li>
            <li>${data[languageValue]["portfolio"]}</li>
            <li>${data[languageValue]["contacts"]}</li>
        </ul>
    `;
}

function CreateAboutContent(data,languageValue) {
    return `
        <div>
            <h3>${data["title"][languageValue]}</h3>
        </div>
        <p>
            ${data["description"][languageValue]}
        </p>
    `;
}

function CreateSkillsContent(data,languageValue) {
    let body = `
        <h3>${data["title"][languageValue]}</h3>
        <ul>
            ${createLiElement(data["tech"])}
        </ul>
        `
    return body;
}

function CreateExperienceCard(data,languageValue) {
    let body = "";
    data.forEach(element => {
        body += `
        <div>
            <div>
                <h3>${element['occupation']}</h3>
                <h4>${element['company']}</h4>
            </div>
            <div>
                <div>
                    <span>${element['firstDay']}</span>
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
    `
    });
    return body;
}

function createLiElement(array) {
    let body = "";
    array.forEach(element => {
        body += `<li>${element}</li>`;
    });
    return body;
}

function CreatePortfolioContent(data) {
    let cards = "";
    data.forEach(element => {
        cards += CreatePortfolioCard(element);
    });
    return `
         <div>
            <h3>PORTFOLIO</h3>
        </div>
        <div>
            <ul>
                ${cards}
            </ul>
        </div>
        
    `;
}

function CreatePortfolioCard(data,languageValue) {
    return `
    <div>
        <h4>${data["projectName"]}</h4>
        <span>${data["image"]}</span>
        <p>
            ${data["description"][languageValue]}
        </p>
        <ul>
            ${createLiElement(data["tech"])}
        </ul>
    </div>
    `
}


export{
    CreateNavegationContent,
    CreateAboutContent,
    CreateSkillsContent,
    CreateExperienceCard,
    CreatePortfolioContent
}