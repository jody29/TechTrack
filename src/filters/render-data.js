function renderData(data, key, text) {
    data.map(obj => {
        let div = document.querySelector('div') // select the div in the html
        let p = document.createElement('p') // create P element
        div.appendChild(p) // append the P element to the div
        p.setAttribute('style', 'color: ' + obj[key]) // eyecolor will be the text color
        p.textContent = obj[text].toUpperCase() // text of the P element will be the wind direction
    })  
}

export default renderData