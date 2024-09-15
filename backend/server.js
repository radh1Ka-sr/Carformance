const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors');

const userRouter = require('./routes/user');
const shopRouter = require('./routes/saloon'); // Ensure the correct path is used

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.use('/user', userRouter);
app.use('/saloon', shopRouter);

// Connect to MongoDB
const uri = 'mongodb+srv://pratiknand5:QkMWn0JfDwtAGv0z@cluster0.vso05zt.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri, {
  
})
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(err => {
    console.error('Connection error', err);
  });

app.listen(3000, () => console.log('Server running on port 3000'));
//hi this is my server