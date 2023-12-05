
const generateId = () => {
    const date = new Date();
    const isoString = date.toISOString();
    const id =  isoString.replace(/\D/g, '')
    console.log('ini fn generateid', id)
    return id
}

module.exports = generateId