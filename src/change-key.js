function changeKey(oldKey, newKey, obj) {
    delete Object.assign(obj, { [newKey]: obj[oldKey] })[oldKey]
}

export default changeKey