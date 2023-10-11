const express = require('express');
const router = express.Router();

const Data = require('./data');


// Define an Express route to handle the GET request
router.get('/data', async (req, res) => {
  try {
    // Retrieve all documents from the collection
    const result = await Data.find();

    // Extract the name and value fields from each document
    const data = result.map((doc) => ({ name: doc.name, value: doc.value }));

    // Send the data as a response
    res.json(data);
  } catch (error) {
    // Handle any errors that occur
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Endpoint to save the name-value pair to MongoDB
router.post('/save', async (req, res) => {
  const { name, value } = req.body;

  try {
    const data = new Data({ name, value });
    await data.save();
    res.sendStatus(200);
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).send('Error saving data');
  }
});

// Endpoint to update the value of the name-value pair in MongoDB
router.put('/update', async (req, res) => {
  const { name, value } = req.body;

  try {
    await Data.findOneAndUpdate({ name }, { value });
    res.sendStatus(200);
  } catch (error) {
    console.error('Error updating data:', error);
    res.status(500).send('Error updating data');
  }
});

module.exports = router;