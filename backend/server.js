const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');


const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
// const = require('');

const app = express();


//config
dotenv.config()
connectDB();

//middleware
app.use(express.json())
app.use(bodyParser.json());
app.use(morgan('tiny'));


//Route
app.use('/api/user', authRoutes);


//App Runnig
const port = process.env.PORT || 8000;

app.listen(port, ()=>{
    console.log(`Server is runnig on port ${port}`);
});



