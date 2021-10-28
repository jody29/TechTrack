fetch('./dataset.json')
.then(results => results.json())
.then(data => {
    return data.map(obj => {
        Object.keys(obj).forEach(key => {
            obj[key] = removeCaps(obj[key])
            obj[key] = removeQuestionMark(obj[key])
            obj[key] = checkIfEmpty(obj[key])
            obj[key] = removeStripes(obj[key])
        })
        console.table(obj)
    })
})
.then(data => {
    return data.map(obj => {
        obj['Wat is je oogkleur?'] = dutchToEnglish(obj['Wat is je oogkleur?'])
    })
})
.catch(err => {
    console.log(err)
})

function removeCaps(str) {
    return typeof str === 'string' ? str.toLowerCase() : str
}

function removeQuestionMark(str) {
    return typeof str === 'string' ? str.replaceAll('?', '') : str
}

function removeStripes(str) {
    return typeof str === 'string' ? str.replaceAll('-', '') : str
}

function checkIfEmpty(str) {
    return typeof str === 'string' && str.length < 1 ? 'geen antwoord' : str
}







