const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL = 'mongodb+srv://chiduc0607:chiduc0607@cluster0.ost5zfu.mongodb.net/?retryWrites=true&w=majority', {
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(); 
  }
};


module.exports = connectDB;