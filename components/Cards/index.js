// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => { 
       const articles = response.data.articles
       const entries = Object.entries(articles)
       for(const key of entries) {
           const data = key[1];
           data.forEach(item => {
               cardsContainer.appendChild(cardCreator(item))
           })
       }
        // console.log(typeof(response.data.articles))
        console.log(response.data)
    })
    .catch(err => {
        console.log(err)
    })

    function cardCreator(cardData) {
        const card = document.createElement('div')
        card.classList.add('card')

        const headline = document.createElement('div')
        headline.classList.add('headline')
        card.textContent =  `${cardData.headline}`
        card.appendChild(headline)
        
        const author = document.createElement('div')
        author.classList.add('author')
        card.appendChild(author)

        const imgContainer = document.createElement('div')
        imgContainer.classList.add('img-container')
        author.appendChild(imgContainer)

        const img = document.createElement('img')
        img.src = `${cardData.authorPhoto}`
        imgContainer.appendChild(img)

        const span = document.createElement('span')
        span.textContent = `${cardData.authorName}`
        author.appendChild(span)


        return card
    }

    const cardsContainer = document.querySelector('.cards-container')