
module.exports = function(req){
    // const token = req.signedCookies['token'] 
    const token = req.cookies['token']

    // no token = 0 
    console.log('get token  ini:',token)
    if(!token) return {role:'guest'} 
    return token
}
