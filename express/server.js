const express = require("express");
require("dotenv").config();
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const bodyParser = require("body-parser");
let rootRouter = null;
const rateLimit = require("express-rate-limit");
const loginRoutes = require("./routing/routes/login");
const dashboard = require("./controller/dashboard/dashboard");
const registerRoutes = require("./routing/routes/register");
const dokterRoutes = require("./routing/routes/dokter");
const dashboardRoutes = require("./routing/routes/dashboard");
const makananRoutes = require("./routing/routes/makanan");
const layananRoutes = require("./routing/routes/layanan");
const jadwalPraktikRoutes = require("./routing/routes/jadwal-praktik");
const favoriteRouter = require("./routing/routes/favorite");
const poliklinikRoutes = require("./routing/routes/poliklinik");
const rekamMedisRoutes = require("./routing/routes/rekamMedis");
const userRoutes = require("./routing/routes/user");

const limiter = rateLimit({
  windowMs: 5 * 1000,
  max: 100,
});

app.use(limiter);
app.use(bodyParser.json());
app.use(cookieParser(process.env.TOKENKEY));
//{ credentials: true, origin: true }
app.use(cors());

app.use(registerRoutes);
app.use(loginRoutes);
app.use(dashboardRoutes);
app.use(dokterRoutes);
app.use(makananRoutes);
app.use(layananRoutes);
app.use(jadwalPraktikRoutes);
app.use(favoriteRouter);
app.use(poliklinikRoutes);
app.use(rekamMedisRoutes);
app.use(userRoutes);
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
  console.log("server started");
});
