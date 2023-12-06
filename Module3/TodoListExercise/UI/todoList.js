function todoUserInterface() {
    // const todosDiv = document.getElementById('todos')
    
    function showTodoItem(newId, newDescription) {
        const listTodoDiv = document.getElementById('listTodo')
        console.log(listTodoDiv.children.length)

        // create new <div>
        const newTodoDiv = document.createElement('div')
        newTodoDiv.className = 'todoItem'
        newTodoDiv.setAttribute('id', newId)

        // create new <p>
        const newTodoItem = document.createElement('p')
        newTodoItem.textContent = newDescription
        newTodoDiv.appendChild(newTodoItem) // เพิ่มลงใน <div>

        //create done button
        const doneButton = document.createElement('button')
        doneButton.textContent = 'Not done'
        newTodoDiv.appendChild(doneButton) // เพิ่มลงใน <div>

        // create remove button
        const removeButton = document.createElement('button')
        removeButton.textContent = 'remove'
        newTodoDiv.appendChild(removeButton) // เพิ่มลงใน <div>

        listTodoDiv.appendChild(newTodoDiv) // เพิ่มลงใน <div id='listTodo'>

        // // Easy but don't know this right or not💀
        // listTodoDiv.innerHTML += `<div class="todoItem" id="${newId}">
        //     <p>${newDescription}</p>
        //     <button>Not done</button>
        //     <button>remove</button>
        //     </div>`
    }

    function showNumberOfDone(numberOfDone) {
        const doneP = document.getElementById('done')
        doneP.textContent = `Number of Done: ${numberOfDone}` 
    }

    function showNumberOfNoneDone(numberOfNoneDone) {
        const notDoneP = document.getElementById('notDone')
        notDoneP.textContent = `Number of Not Done: ${numberOfNoneDone}`
    }

    function removeTodoItem(removeId) {
        const removeTodoNode = document.getElementById(removeId)
        removeTodoNode.parentElement.removeChild(removeTodoNode)
    }

    return {
        showTodoItem,
        showNumberOfDone,
        showNumberOfNoneDone,
        removeTodoItem
    }
}

// ES Modules
export {todoUserInterface}

// CommonJS
// module.exports = todoUserInterface