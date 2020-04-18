// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const header = document.createElement('div')
    header.classList.add('header')

    const dateSpan = document.createElement('span')
    dateSpan.classList.add('date')
    dateSpan.textContent = 'MARCH 28, 2019'
    header.appendChild(dateSpan)

    const title = document.createElement('h1')
    title.textContent = "Lambda Times"
    header.appendChild(title)

    const tempSpan = document.createElement('span')
    tempSpan.classList.add('temp')
    tempSpan.textContent = "98°"
    header.appendChild(tempSpan)

    return header
}

const headerContainer = document.querySelector('.header-container')
const headerComponent = Header()
headerContainer.appendChild(headerComponent)