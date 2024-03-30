const parentDiv = document.getElementById("parent");
const form = document.getElementById("my-form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const pNode = document.createElement("p");

    const nameNode = document.createTextNode("User's fullname is: ");
    const firstNode = document.createTextNode(form.elements.name.value);
    const spaceNode = document.createTextNode(" ");
    const secondNode = document.createTextNode(form.elements.surname.value);

    pNode.appendChild(nameNode);
    pNode.appendChild(firstNode);
    pNode.appendChild(spaceNode);
    pNode.appendChild(secondNode);

    parentDiv.appendChild(pNode);
});