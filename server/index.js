// Write a MongoDB query to find all documents in a collection where a particular
// field has avalue greater than a certain value.

/*
const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config()

const app = express();

// MongoDB connection
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
    console.log('mognodb is connected')
}).catch((error) => {
    console.log("database is not connected")
})

// Mongoose Schema
const mySchema = new mongoose.Schema({
  username: String, 
  
});

const User = mongoose.model('User', mySchema);

// API to retrieve data
app.get('/api/data', async (req, res) => {
  try {
    const certainValue = 25;
    const results = await User.find({ username: { $gt: certainValue } });
    res.json(results);
    console.log(results)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
*/

// Q2-. Write a simple Express.js route that takes in a parameter from the URL and
// returns it as aresponse.

// const express = require("express");
// const app = express();
// const PORT = 3000;

// // Route to handle URL parameters
// app.get("/api/:parameter", (req, res) => {
//   const parameterValue = req.params.parameter;
//   res.send(`Parameter received: ${parameterValue}`);
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });










// Q-4. Write a Node.js script that reads a file, performs a certain operation on the data, and
// writes the result to another file.
const fs = require('fs');

// File paths
const inputFilePath = 'text.txt'; 
const outputFilePath = 'text1.txt'; 

// Read file function
const readFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

// Write file function

const writeFile = (filePath, data) => {
    data = 'this is shubham sharma and see the result in text1 file...........'
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, 'utf8', (err) => {
      if (err) {
        reject(err);
      } else {
        resolve('File has been written successfully.');
      }
    });
  });
};

// Perform operation on data
const processFileData = (data) => {

  return data.toUpperCase();
};


readFile(inputFilePath)
  .then((data) => {
    const processedData = processFileData(data);
    return writeFile(outputFilePath, processedData);
  })
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.error('Error:', err);
  });
