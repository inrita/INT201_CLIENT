// ES Modules
import { 
    // addTodoHandler, 
    loadHandler, 
    beforeUnloadHandler 
} from "./eventHandler/eventController.js"

window.addEventListener('load', () => {
    loadHandler()
})

window.addEventListener('beforeunload', (event) => {
    beforeUnloadHandler(event)
})

// Function to show in HTML based on todoListUI.js
// Get data from todoManagement.js
// todo.js just class to create objects
// addTodo in todoManagement.js only return todo.id

// const addButton = document.getElementById('addBtn')
// addButton.addEventListener('click', () => addTodoHandler())

// const inputTodo = document.querySelector('input')
// inputTodo.addEventListener('keypress', (event) => {
//   if (event.key === 'Enter') addTodoHandler()
// })