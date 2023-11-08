function createLiElement(array) {
    let body = "";
    array.forEach(element => {
        body += `<li>${element}</li>`;
    });
    return body;
}
function createButtonElement(array) {
    let body = "";
    array.forEach((element, index) => {
        body += `
        <div class="m-1">
            <button  type="button" class="btn btn-primary btn-sm">${element}</button>
        </div>
        `;
    });
    return body;
}
export {
    createLiElement,
    createButtonElement
}