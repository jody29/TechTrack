import * as d3 from "https://cdn.skypack.dev/d3@7";

let colors = []

fetch('./colors.json')
.then(results => results.json())
.then(data => {
    return data.map(obj => {
        colors.push(obj)
    })
})

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
        return obj
    })
    
})
.then(data => data.map(obj => {
    changeKey('Wat is je favoriete soort huisdier?', 'favPet', obj)
    changeKey('Wat is je oogkleur?', 'eyeColor', obj)
    changeKey('Wat is je favoriete windrichting?', 'favDirection', obj)
    changeKey('Op een schaal van 1 tot 10, hoeveel zin heb je in de Tech Track?', 'excitmentLevel', obj)
    changeKey('Kies zelf of je deze vraag beantwoord.', 'chooseAnswer', obj)
    changeKey('Wat is je favoriete datum?', 'dateFormat', obj)
    changeKey('Wat is je favoriete datum, maar nu in tekst!', 'dateString', obj)
    changeKey('Wat is je favoriete zuivelproduct?', 'favDairy', obj)
    changeKey('Welke kleur kledingstukken heb je aan vandaag? (Meerdere antwoorden mogelijk natuurlijk...)', 'clothColor', obj)
    changeKey('Op welke verdieping van het TTH studeer je het liefst?', 'tthFloor', obj)
    changeKey('Wat wil je worden als je groot bent?', 'futureJob', obj)
    changeKey('Wat wilde je later worden als je groot bent, maar nu toen je zelf 8 jaar was.', 'earlyFutureJob', obj)
    changeKey('Kaas is ook een zoogdier?', 'cheeseAnimal', obj)
    changeKey('Als je later een auto zou kopen, van welk merk zou deze dan zijn?', 'futureCar', obj)
    
    return obj
}))
.then(data => {
    renderData(data)
})
.catch(err => {
    console.log(err)
})

function changeKey(oldKey, newKey, obj) {
    delete Object.assign(obj, { [newKey]: obj[oldKey] })[oldKey]
}

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

function renderData(data) {
    data.map(obj => {
        let div = document.querySelector('div')
        let p = document.createElement('p')
        div.appendChild(p)
        p.textContent = obj['favPet']
    })  
}

    









