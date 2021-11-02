let colors = [] // declaring the colors array

fetch('./src/data/colors.json') // colors.json is being fetched
.then(results => results.json()) // this will return a promise that resolves to a javascript object
.then(data => {
    return data.map(obj => { // looping over all the objects (colors)
        colors.push(obj) // pushing all the color objects to the colors array
    })
})

export default colors