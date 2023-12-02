const createNewToken = require("./createNewToken")
const {authenticateUser} = require('../../authentication/authentication') 
module.exports = async function(req,res,next){
     
    const user = await authenticateUser(req,res) 
    console.log('ini controller login',user )    
    return res.status(200).send(user)
}

// ga dipake ini