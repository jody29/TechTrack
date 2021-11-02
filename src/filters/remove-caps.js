function removeCaps(str) {
    return typeof str === 'string' ? str.toLowerCase() : str
}

export default removeCaps