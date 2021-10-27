let cleanData = []
let honden = []



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
                changeKey(key, 'eyeColor', v[key])
                break;
            case 'Op een schaal van 1 tot 10, hoeveel zin heb je in de Tech Track?':
                changeKey(key, 'excitementLevel', v[key])
                break;
            case 'Kies zelf of je deze vraag beantwoord.':
                changeKey(key, 'chooseQuestion', v[key])
                break;
            case 'Wat is je favoriete datum?':
                changeKey(key, 'favDate', v[key])
                break;
            case 'Wat is je favoriete datum, maar nu in tekst!':
                changeKey(key, 'excitementLevel', v[key])
                break;
            case 'Wat is je favoriete zuivelproduct?':
                changeKey(key, 'favDairy', v[key])
                break;
            case 'Welke kleur kledingstukken heb je aan vandaag? (Meerdere antwoorden mogelijk natuurlijk...)':
                changeKey(key, 'clothingColor', v[key])
                break;
            case 'Op welke verdieping van het TTH studeer je het liefst?':
                changeKey(key, 'favFloor', v[key])
                break;
            case 'Wat wil je worden als je groot bent?':
                changeKey(key, 'futureJob', v[key])
                break;
            case 'Wat wilde je later worden als je groot bent, maar nu toen je zelf 8 jaar was.':
                changeKey(key, 'futureJobyoung', v[key])
                break;
            case 'Kaas is ook een zoogdier?':
                changeKey(key, 'cheeseAnimal', v[key])
                break;
            case 'Als je later een auto zou kopen, van welk merk zou deze dan zijn?':
                changeKey(key, 'carBrand', v[key])
                break;
            case 'Wat is je favoriete windrichting?':
                changeKey(key, 'favDirection', v[key])
                break;
            default:
                key = 'none'
        }
        console.log(Object.keys(v))
    })
    
}))
.then(() => {
    console.log('Er zijn', honden.length.toString(), 'honden')
})

function changeKey(oldKey, newKey, v) {

    Object.assign(v, {[newKey]: v[oldKey]})
    delete v[oldKey]
}








