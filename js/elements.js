function createLiElement(array) {
    let body = "";
    array.forEach(element => {
        body += `<li>${element}</li>`;
    });
    return body;
}
export{
    createLiElement
}