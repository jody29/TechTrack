import directions from "../fetch-directions.js"

function directionToEmoji(data, key) {
    data.map(obj => {
        let word = obj[key]
        directions.map(item => {
            return item.direction === word ? obj[key] = item.emoji : {[key]: obj[key]}
        })
    })
}



export default directionToEmoji