const mongoose = require('mongoose');

// Replace 'your_database_name' with the name of your MongoDB database
// const dbName = 'your_database_name';

// Replace 'mongodb://localhost:27017' with your MongoDB connection string
const dbURI = 'mongodb+srv://melodichoq:Melodic1890-@cluster0.tggka0v.mongodb.net/binance?retryWrites=true&w=majority';

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;