import directions from "../fetch-directions.js"

function directionToEmoji(data, key) {
    data.map(obj => {
        let word = obj[key]
        directions.map(item => {
            if (item.direction === word) {
                return obj[key] = item.emoji
            } else {
                return {[key]: obj[key]}
            }
        })
    })
}

export default directionToEmoji