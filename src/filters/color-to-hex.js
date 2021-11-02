import colors from "../fetch-colors.js"

function colorToHex(data, key) {
    data.map(obj => {
        let word = obj[key]
        colors.map(item => {
            if (item.color === word) {
                return obj[key] = item.hex
            } else {
                return {[key]: obj[key]}
            }
        })
    })
}

export default colorToHex