let cleanData = []

const data = fetch('./dataset.json')
.then(results => results.json())
.then(data => data.forEach(function(v, i, obj) {
    cleanData.push(data[i]['Kaas is ook een zoogdier?'].toString().toLowerCase())
    cleanData.sort()
    
    Object.keys(v).forEach(key => {
        console.log(key,': ', v[key].toString().toLowerCase())
        
    })
}))

// console.log(cleanData)





// for(var i = 0; i < test.length; i++) {
//     console.log(test[i]['Wat is je oogkleur?'] )
// }

