const express = require('express')
require('dotenv').config()
const app = express()
const cookieParser = require('cookie-parser')
const cors = require('cors')
const authenticator = require('./routing/authenticator')
const bodyParser = require('body-parser')
let rootRouter = null
const rateLimit = require('express-rate-limit')

const limiter = rateLimit({
   windowMs : 5 * 1000,
   max :100
})

app.use(limiter)
app.use(bodyParser.json())
app.use(cookieParser(process.env.TOKENKEY))
//{ credentials: true, origin: true }
app.use(cors())

app.use('/', (req, res, next) => {
    rootRouter = authenticator(app, req, res)
    next()
})


// // Serve static files from the "public" directory
// app.use(express.static('public'));

// // Handle POST requests to the /upload endpoint
// app.post('/upload', upload.single('image'), (req, res) => {
//     // 'image' is the name attribute of the file input in the form

//     // Access the uploaded file information
//     const { filename, path } = req.file;

//     // You can save this information to a database or perform other actions
//     // based on your application's requirements.

//     res.json({
//         filename: filename,
//         path: path
//     });
// });

app.listen(process.env.EXPRESS_PORT, (req, res) => {
    console.log("server started")
})
