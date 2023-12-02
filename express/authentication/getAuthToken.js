
module.exports = function(req){
    // const token = req.signedCookies['token'] 
    const token = req.headers[ 'authorization' ] 

    return token
}
