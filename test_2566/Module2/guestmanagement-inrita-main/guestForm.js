// 65130500090 Inrita Warajirawiroj

// browser
// import { createGuestList } from './data/guestdata.js'

// node.js
const createGuestList = require('./data/guestdata.js')

const guestList = createGuestList()

function guestForm() {
  //provide initial guests data list created from GuestManagement class
  let guests = guestList

  // 1. register event for searching and adding
  function registerEventHandling() {
    const inputSearch = document.querySelector('#search-input')
    inputSearch.addEventListener('keyup', (event) => {
      searchGuest(event.target.value)
    })

    const addNewGuest = document.querySelector('#add-guest-btn')
    addNewGuest.addEventListener('click', () => addGuest)
  }

  // 2. Function to display one guest in the display area
  function displayGuest(guestItem) {
    const div = document.getElementById('display-area')

    // create div
    const divEle = document.createElement('div')
    
    // create first span
    const spanFirst = document.createElement('span')
    spanFirst.textContent = `${guestItem}`
    divEle.appendChild(spanFirst)

    // create second span
    const spanSecond = document.createElement('span')
    spanSecond.setAttribute('class', 'remove-icon')
    spanSecond.setAttribute('id', `${guestItem.firstname}-${guestItem.lastname}`)
    spanSecond.textContent = '[X]'
    spanSecond.style = 'cursor:pointer;color:red'
    divEle.appendChild(spanSecond)

    div.appendChild(divEle)
  }

  // 3. Function to display all existing guests in the display area
  function displayGuests(guestResult) {
    const showGuestResult = document.querySelector('#display-area')
    showGuestResult.textContent = ''
    guestResult.forEach((guest) => {
        guest.displayGuest(guests)
    })
  }

  // 4. Function to search and display matching guests
  function searchGuest(event) {
    const search = event.target.value
    searchGuests(search)
    displayGuests(search)
  }

  // 5. Function to add a new guest
  function addGuest() {
    const inputFirstname = document.querySelector('#firstname-input')
    const inputLastname = document.querySelector('#lastname-input')
    const addBtn = document.querySelector('#add-guest-btn')

    addBtn.addEventListener('click', addNewGuest(firstname, lastname))
    displayGuest(newGuestObject)
    inputFirstname.textContent = ''
    inputLastname.textContent = ''
  }

  // 6. Function to remove a guest
  function removeGuest(event) {
    const remove = event.target
    remove.removeEventListener('click', () => removeGuest(deleteGuest))
  }

  return {
    registerEventHandling,
    displayGuests,
    searchGuest,
    addGuest,
    removeGuest
  }
}

// node.js
module.exports = guestForm

// browser
// export { guestForm }
// const { registerEventHandling, displayGuests } = guestForm()
// registerEventHandling()
// displayGuests(guestList.getAllGuests())
