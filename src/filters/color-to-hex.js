import colors from "../fetch-colors.js"

function colorToHex(data, key) { // this function has the data object and a key  as parameter
    data.map(obj => { // loops through the data objects
        let word = obj[key] // defining the color word
        colors.map(item => { // loops through the color array, each color has his own item
            if (item.color === word) { // checks if color name is equal to word
                return obj[key] = item.hex // if this is true, return the hexcode of the color
            } else {
                return {[key]: obj[key]} // if not true, return the color name
            }
        })
    })
}

export default colorToHex