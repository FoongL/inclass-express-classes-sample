// getting the app started
const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();

//Importing Routers
const userRouter = require('./routers/userRouter')
const itemRouter = require('./routers/itemRouter')

// Importing Controllers
const UserController = require('./controllers/userController')
const ItemController = require('./controllers/ItemController')

// Import Models
const db = require('./models/index')

// Initialize Controllers
const userController = new UserController(db.Users)
const itemController = new ItemController(db.Items)

//Initiliaizing Routers
app.use('/user', userRouter(userController))
app.use('/item', itemRouter(itemController))

const { PORT } = process.env
app.listen(PORT, ()=> console.log(`App is listening on port ${PORT}`))