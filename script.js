const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// my sql
const sql = require('mssql');

// config ms sql
const config = {
  user: 'CloudSA3320c6f6',
  password: 'recipeforcooK123',
  server: 'sqlforwebsite.database.windows.net',
  database: 'SQL_website',
  options: {
    encrypt: true, // For secure connection
  },
};



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// ... Your server code ...
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


// post statement will add info from website to db

// INSERT INTO DATA (WORD) VALUES (?)

app.post('/', async (req,res) => {
    
  word = req.body.word

  try {
    // Establish a connection to Azure SQL Database
    await sql.connect(config);

    // Create a new request object
    const request = new sql.Request();

    // Set up the parameters for the insert query
    request.input('word', sql.VarChar, word);

    // Execute the SQL query to insert data into the database
    const query = 'INSERT INTO DATA (WORD) VALUES (@word)';
    await request.query(query);

    console.log('Data inserted successfully');
  } catch (err) {
    console.error('Error executing SQL query:', err);
  }

  res.sendFile(path.join(__dirname, 'index.html'));


  })



app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
