function createLiElement(array) {
    let body = "";
    array.forEach(element => {
        body += `<li>${element}</li>`;
    });
    return body;
}
function createButtonElement(array) {
    let body = "";
    array.forEach((element) => {
        body += `
        <div class="m-1">
            <button type="button" class="btn btn-primary btn-sm botoes">${element}</button>
        </div>
        `;
    });
    return body;
}
function GetDateInfo(data, language) {
    if (!data["date"]) {
        return data["present"][language];
    }
    else {
        return data["date"];
    }
}

export {
    createLiElement,
    createButtonElement,
    GetDateInfo
}