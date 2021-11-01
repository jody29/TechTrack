const dataSet = './dataset.json'

const petKey = 'Wat is je favoriete soort huisdier?'

// let cleanData = []
// let honden = []



fetchData(dataSet).then(data => {
    console.log('data fetched')

    console.log(data)

    const favPets = dataParse(data, petKey)

    console.log(favPets)

})

fetch('./dataset.json')
.then(results => results.json())
.then(data => data.forEach(function(v, i, obj) {
    cleanData.push(data[i]['Kaas is ook een zoogdier?'].toString().toLowerCase())
    cleanData.sort()
    
    Object.keys(v).forEach((key) => {
        switch(key) {
            case 'Wat is je favoriete soort huisdier?':
                changeKey(key, 'favPet', v)
                break;
            case 'Wat is je oogkleur?':
                changeKey(key, 'eyeColor', v)
                break;
            case 'Op een schaal van 1 tot 10, hoeveel zin heb je in de Tech Track?':
                changeKey(key, 'excitementLevel', v)
                break;
            case 'Kies zelf of je deze vraag beantwoord.':
                changeKey(key, 'chooseQuestion', v)
                break;
            case 'Wat is je favoriete datum?':
                changeKey(key, 'favDate', v)
                break;
            case 'Wat is je favoriete datum, maar nu in tekst!':
                changeKey(key, 'excitementLevel', v)
                break;
            case 'Wat is je favoriete zuivelproduct?':
                changeKey(key, 'favDairy', v)
                break;
            case 'Welke kleur kledingstukken heb je aan vandaag? (Meerdere antwoorden mogelijk natuurlijk...)':
                changeKey(key, 'clothingColor', v)
                break;
            case 'Op welke verdieping van het TTH studeer je het liefst?':
                changeKey(key, 'favFloor', v)
                break;
            case 'Wat wil je worden als je groot bent?':
                changeKey(key, 'futureJob', v)
                break;
            case 'Wat wilde je later worden als je groot bent, maar nu toen je zelf 8 jaar was.':
                changeKey(key, 'futureJobyoung', v)
                break;
            case 'Kaas is ook een zoogdier?':
                changeKey(key, 'cheeseAnimal', v)
                break;
            case 'Als je later een auto zou kopen, van welk merk zou deze dan zijn?':
                changeKey(key, 'carBrand', v)
                break;
            case 'Wat is je favoriete windrichting?':
                changeKey(key, 'favDirection', v)
                break;
            default:
                key = 'none'
        }
    })
    
}))
.then(() => {
    console.log('Er zijn', honden.length.toString(), 'honden')
})

async function fetchData(url) {
    try {
        const results = await fetch(url)
        const data = await results.json()
        return data
    } catch {
        console.log('No data fetched')
    }
}


function changeKey(oldKey, newKey, v) {
    Object.assign(v, {[newKey]: v[oldKey].toString().toLowerCase()})
    delete v[oldKey]
    console.log(v)
}








