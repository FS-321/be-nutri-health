const express = require('express')
// const authenticatorRoutes = require('./routing/authenticator')
require('dotenv').config()
const app = express()
const cookieParser = require('cookie-parser')
const cors = require('cors')
const authenticator = require('./routing/authenticator')
const bodyParser = require('body-parser')
const path = require('path')
let rootRouter = null

app.use(bodyParser.json())
app.use(cookieParser(process.env.TOKENKEY))
//{ credentials: true, origin: true }
app.use(cors())

app.use('/', (req, res, next) => {
    rootRouter = authenticator(app, req, res)
    next()
})

// gambar
// app.use(express.static(path.join(__dirname, 'public')));

// // Set up storage for multer
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'public/images/'); // Store the images in './public/images/'
//     },
//     filename: function (req, file, cb) {
//         const ext = path.extname(file.originalname);
//         cb(null, file.fieldname + '-' + Date.now() + ext);
//     },
// });

// const upload = multer({ storage: storage });

// // Handle POST request with image upload
// app.post('/upload/:table/:id', upload.single('image'), async (req, res) => {
//     if (!req.file) {
//         return res.status(400).send('No file uploaded.');
//     }

//     const { filename, path, mimetype } = req.file;
//     const { table, id } = req.params;

//     try {
//         sequelize.query(`UPDATE ${table} SET  = :filename WHERE id = :userIdToUpdate`, {
//             replacements: { newUsername, userIdToUpdate },
//             type: Sequelize.QueryTypes.UPDATE
//         })


//         res.send(`File uploaded and saved in the database: ${filename}`);
//     } catch (error) {
//         console.error('Error saving image in the database:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });


app.listen(process.env.EXPRESS_PORT, (req, res) => {
    console.log("server started")
})
