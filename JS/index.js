// To-do column buttons' event listeners
function removeToDo() {
    const toDel = this.parentElement
    const list = document.getElementById("todo")

    list.removeChild(toDel)
}

function checkDone(){
    const toTransfer = this.parentElement
    const listTodo = document.getElementById("todo")
    const listDone = document.getElementById("done")

    listTodo.removeChild(toTransfer)
    const text = toTransfer.childNodes[0].textContent

    var newLi = document.createElement("li")
    var Ptext = document.createElement("p")
    var newRevertB = document.createElement("button")
    var newTrashB = document.createElement("button")

    newRevertB.append(document.createTextNode("↩️"))
    newRevertB.addEventListener("click", retakeTask)

    newTrashB.append(document.createTextNode("🗑️"))
    newTrashB.addEventListener("click", removeDone)

    Ptext.append(document.createTextNode(text))

    newLi.appendChild(Ptext)
    newLi.appendChild(newTrashB)
    newLi.appendChild(newRevertB)

    listDone.appendChild(newLi)
}

// Done column buttons' event listeners
function removeDone() {
    const toDel = this.parentElement
    const list = document.getElementById("done")

    list.removeChild(toDel)
}

function retakeTask(){
    const toTransfer = this.parentElement
    const listTodo = document.getElementById("todo")
    const listDone = document.getElementById("done")

    listDone.removeChild(toTransfer)
    const text = toTransfer.childNodes[0].textContent

    var newLi = document.createElement("li")
    var Ptext = document.createElement("p")
    var newCheckB = document.createElement("button")
    var newCloseB = document.createElement("button")

    newCheckB.append(document.createTextNode("✔️"))
    newCheckB.addEventListener("click", checkDone)

    newCloseB.append(document.createTextNode("❌"))
    newCloseB.addEventListener("click", removeToDo)

    Ptext.append(document.createTextNode(text))

    newLi.appendChild(Ptext)
    newLi.appendChild(newCloseB)
    newLi.appendChild(newCheckB)

    listTodo.appendChild(newLi)
}

// Adition of new task on To-do column
function newToDo() {
    const text = document.getElementById("newTodo").value
    const list = document.getElementById("todo")
    const textArea = document.getElementById("newTodo")

    var newLi = document.createElement("li")
    var Ptext = document.createElement("p")
    var newCheckB = document.createElement("button")
    var newCloseB = document.createElement("button")

    newCheckB.append(document.createTextNode("✔️"))
    newCheckB.addEventListener("click", checkDone)

    newCloseB.append(document.createTextNode("❌"))
    newCloseB.addEventListener("click", removeToDo)

    Ptext.append(document.createTextNode(text))

    newLi.appendChild(Ptext)
    newLi.appendChild(newCloseB)
    newLi.appendChild(newCheckB)

    textArea.value = ""

    list.appendChild(newLi)    
}

var add = document.getElementById("add")
add.addEventListener("click", newToDo)