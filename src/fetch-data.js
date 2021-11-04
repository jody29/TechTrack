// importing all the modules
import changeKey from './change-key.js'
import removeCaps from './filters/remove-caps.js'
import removeQuestionMark from './filters/remove-question.js'
import removeStripes from './filters/remove-stripes.js'
import checkIfEmpty from './filters/check-empty.js'
import colorToHex from './filters/color-to-hex.js'
import renderData from './filters/render-data.js'
import directionToEmoji from './filters/direction-to-emoji.js'
import removeSpace from './filters/remove-space.js'


export default fetch('./src/data/dataset.json') // fetching the dataset.json file
.then(results => results.json()) //parsing the json data to javascript object
.then(data => {
    return data.map(obj => { // looping over all the surveys from the data object
        Object.keys(obj).forEach(key => { 
            obj[key] = removeCaps(obj[key]) // setting all the strings to lowercase
            obj[key] = removeQuestionMark(obj[key]) // removing all question marks in strings
            obj[key] = checkIfEmpty(obj[key]) // check if given answer is empty
            obj[key] = removeStripes(obj[key]) // removing all strips in strings
        })
        return obj // retuning the filtered data
    })
    
})
.then(data => data.map(obj => { // changing all the keys to simpler keys
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
    
    return obj // returning data with new keys
}))
.then(data => {
    data.map(obj => {
        obj['eyeColor'] = removeSpace(obj['eyeColor']) // remove spaces in eyecolors
        obj['favDirection'] = removeSpace(obj['favDirection']) // remove spaces in favorite directions
    })
    return data
})
.then(data => {
    colorToHex(data, 'eyeColor') // transforming all eyeColors to hexcode 
    directionToEmoji(data, 'favDirection')
    return data // returning data with hexcode eyeColors
})
.then(data => {
    renderData(data, 'eyeColor', 'favDirection') // rendering all eyeColors
})
.catch(err => { // if an error occurs, console.log the error
    console.log(err)
})
