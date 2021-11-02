function renderData(data, key) {
    data.map(obj => {
        let div = document.querySelector('div')
        let p = document.createElement('p')
        div.appendChild(p)
        p.setAttribute('style', 'background-color: ' + obj[key])
        p.textContent = obj[key].toUpperCase()
    })  
}

export default renderData