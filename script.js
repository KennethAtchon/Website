const express = require('express');
const app = express();
const path = require('path');

document.getElementById("inputForm").addEventListener("submit", function(event)
 {
  event.preventDefault();

var info = document.getElementById("word").value;


 })

// ... Your server code ...
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
