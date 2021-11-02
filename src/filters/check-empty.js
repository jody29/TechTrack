function checkIfEmpty(str) {
    return typeof str === 'string' && str.length < 1 ? 'geen antwoord' : str
}

export default checkIfEmpty