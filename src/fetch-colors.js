let colors = []

fetch('./src/data/colors.json')
.then(results => results.json())
.then(data => {
    return data.map(obj => {
        colors.push(obj)
    })
})

export default colors