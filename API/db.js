const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Sammy:123Muel@cluster0.5mfny.mongodb.net/players?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.log(error);
});
