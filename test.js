const jwt = require('jsonwebtoken')



const token = jwt.sign({error:0},'secret', {expiresIn:'10000'})



console.log(token)


const decoded = jwt.verify(token,'secret')
console.log(decoded)
if(-1)console.log('minus')