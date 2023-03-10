const express = require('express')
const cors = require('cors');
const userRoutes = require('./routes/Users.routes');
const productsRoutes = require('./routes/Product.routes');
const rutasAuth = require('./routes/Auth.routes');
const categoriesRoutes = require('./routes/Categories.routes')
const { dbConnection } = require('./database/config');
require('dotenv').config()
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
    // GET - http://localhost:3000
    res.send("API v1.0 eccomerce");
});

(async () => {
    await dbConnection();
    const rutaBase = '/api/v1';
    app.use(rutaBase, userRoutes);
    app.use(rutaBase, productsRoutes);
    app.use(rutaBase, rutasAuth);
    app.use(rutaBase, categoriesRoutes)
})();



app.listen(PORT, () => console.log(`La applicacion esta corriendo en el puerto ${PORT}!`));