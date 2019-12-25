const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    mongoose.connect('mongodb://localhost:27017/contact-keeper', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });

    console.log('MongoDB Connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
