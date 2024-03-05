const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT || 3001;
async function connectToMongo() {
  try {
    await mongoose.connect(PORT, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

module.exports = connectToMongo;
