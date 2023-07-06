const express = require('express');
const app = express();
const path = require('path');

// install jdbc package

// config jdbc and add connection string to azure



// ... Your server code ...
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


// post statement will add info from website to db

// console.log(req.body)

  /*
app.post('/', async (req,res) => {
    

  })
  */






app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
