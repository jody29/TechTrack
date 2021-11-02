function removeQuestionMark(str) {
    return typeof str === 'string' ? str.split(' ').join('') : str
}

export default removeQuestionMark