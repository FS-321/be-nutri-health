
module.exports = function(req){
    // const token = req.signedCookies['token'] 
    const token = req.headers.authorization 
    console.log('ini auth token', token)

    // no token = 0 
    console.log('create token  ini:',token)
    if(!token) return {role:'guest'} 
    return token
}
