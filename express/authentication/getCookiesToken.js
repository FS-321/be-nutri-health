
module.exports = function(req){
    const token = req.cookiesSign['token']  
    return token
}
