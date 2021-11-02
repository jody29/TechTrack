let directions = []

fetch('./src/data/directions.json')
.then(results => results.json())
.then(data => {
    return data.map(obj => {
        directions.push(obj)
    })
})

export default directions