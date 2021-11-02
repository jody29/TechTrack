function removeQuestionMark(str) { // function checks 
    return typeof str === 'string' ? str.split(' ').join('') : str
}

export default removeQuestionMark