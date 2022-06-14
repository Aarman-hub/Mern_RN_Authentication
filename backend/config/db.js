const mongoose = require('mongoose');




const connectDB = async () =>{

    try {

        const db = process.env.MONGO_URI;

        await mongoose.connect(db, {
            useNewUrlParser:true,
        });
        console.log("Database connected!");
    } catch (error) {
        process.exit(1);
    }
}

module.exports = connectDB;