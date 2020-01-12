let input = document.querySelector(".placeToWrite");
let btnCreate = document.querySelector(".createItem");
let ulNode = document.querySelector("ul");


btnCreate.addEventListener("click", addNewItem)

function addNewItem() {
    let liNode = document.createElement("li");
    let btnNode = document.createElement("button");
    let textNode = document.createTextNode(input.value + " ")
    btnNode.addEventListener("click", () => { deleteItem(liNode) })
    btnNode.innerText = "Delete"
    ulNode.appendChild(liNode)
    liNode.appendChild(textNode)
    liNode.appendChild(btnNode)
}

function deleteItem(element) {
    ulNode.removeChild(element)
}



