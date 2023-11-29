
module.exports = function(req){
    const token = req.signedCookies['token'] 
    // no token = 0 
    console.log('token  ini:',token)
    if(!token) return {role:'guest'} 
    return token
}
