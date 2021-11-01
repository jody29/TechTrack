
// fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151')
// .then(results => results.json())
// .then(data => {
//     let div = document.querySelector('div')
//     data.results.map(obj => {
//        let p = document.createElement('p')
//        p.textContent = obj['url'] + ': ' + obj['name']
//        div.appendChild(p)
//        console.log(obj)

//     })
// })

let keyword = 'corona%20pas'
let apiKey = '6e3e9c53550340e49b7b76175082cca3'
let form = document.querySelector('button')

form.addEventListener('click', () => {
    const val = document.querySelector('input').value

    console.log(val)
    keyword = val

    fetch(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=${apiKey}`)
.then(results => results.json())
.then(data => {
    
    data.articles.map(obj => {
       let container = document.querySelector('div')
       let article = document.createElement('a')
       let title = document.createElement('h3')
       let content = document.createElement('p')
       let image = document.createElement('img')
       title.textContent = obj['title']
       content.textContent = obj['content']
       article.setAttribute('href', obj['url'])
       article.setAttribute('target', '_blank')
       image.setAttribute('src', obj['urlToImage'])

       article.appendChild(title)
       article.appendChild(image)
       article.appendChild(content)
       container.appendChild(article)
       console.log(obj)

    })
})
event.preventDefault()
})







