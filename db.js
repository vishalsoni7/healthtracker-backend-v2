const mongoose = require('mongoose');

const mongoURI = process.env.MONGODB;

const dataBase = () => {
  if (!mongoURI) {
    console.error('Enviromente variable not defined!')
  } else {
    mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then(() => {
      console.log('Database connected.')
    }).catch((error) => {
      console.error('Error while connecting database,', error)
    })
  }
}

module.exports = dataBase