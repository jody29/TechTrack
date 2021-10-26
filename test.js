let cleanData = []
let honden = []

fetch('./dataset.json')
.then(results => results.json())
.then(data => data.forEach(function(v, i, obj) {
    cleanData.push(data[i]['Kaas is ook een zoogdier?'].toString().toLowerCase())
    cleanData.sort()
    
    Object.keys(v).forEach(key => {
        // switch(key) {
        //     case 'Wat is je favoriete soort huisdier?':
        //         v.toString().toLowerCase()
        //         break;
        //     case 'Wat is je oogkleur?':
        //         key = 'eyeColor'
        //         break;
        //     case 'Op een schaal van 1 tot 10, hoeveel zin heb je in de Tech Track?':
        //         key = 'excitementLevel'
        //         break;
        //     case 'Kies zelf of je deze vraag beantwoord.':
        //         key = 'Choose'
        //         break;
        //     case 'Wat is je favoriete datum?':
        //         key = 'FavDate'
        //         break;
        //     case 'Wat is je favoriete datum, maar nu in tekst!':
        //         key = 'FavDateletter'
        //         break;
        //     case 'Wat is je favoriete zuivelproduct?':
        //         key = 'dairyProduct'
        //         break;
        //     case 'Welke kleur kledingstukken heb je aan vandaag? (Meerdere antwoorden mogelijk natuurlijk...)':
        //         key = 'clothingColor'
        //         break;
        //     case 'Op welke verdieping van het TTH studeer je het liefst?':
        //         key = 'favoriteFloor'
        //         break;
        //     case 'Wat wil je worden als je groot bent?':
        //         key = 'futureJob'
        //         break;
        //     case 'Wat wilde je later worden als je groot bent, maar nu toen je zelf 8 jaar was.':
        //         key = 'futureJobyoung'
        //         break;
        //     case 'Kaas is ook een zoogdier?':
        //         key = 'cheeseQuestion'
        //         break;
        //     case 'Als je later een auto zou kopen, van welk merk zou deze dan zijn?':
        //         key = 'carBrand'
        //         break;
        //     case 'Wat is je favoriete windrichting?':
        //         key = 'favoriteDirection'
        //         break;
        //     default:
        //         key = 'none'
        // }
        
        v[key].toString().toLowerCase() === 'hond' ? honden.push(v[key].toString().toLowerCase()) : false
    
    })
    
}))
.then(() => {
    console.log('Er zijn', honden.length.toString(), 'honden')
})







