function renderData(data, key, text) {
    data.map(obj => {
        let div = document.querySelector('div')
        let p = document.createElement('p')
        div.appendChild(p)
        p.setAttribute('style', 'color: ' + obj[key])
        p.textContent = obj[text].toUpperCase()
    })  
}

export default renderData