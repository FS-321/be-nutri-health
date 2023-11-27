module.exports = function (req,res,next){
        const registerForm = req.body
        const status = Model.create({registerForm})
         
         if(!status) return res.status(401).send({message:"Username or email already register"})
         
         
} 