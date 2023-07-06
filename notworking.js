/*


// install odbc package
const odbc = require('odbc');
// config odbc and add connection string to azure
const connectionString = `Driver={ODBC Driver 18 for SQL Server};Server=tcp:sqlforwebsite.database.windows.net,1433;Database=SQL_website;Uid=admin1@internsarpacloud.onmicrosoft.com;Pwd=recipeforcooK123;Encrypt=yes;TrustServerCertificate=no;Connection Timeout=30;Authentication=ActiveDirectoryPassword`;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// post statement will add info from website to db


app.post('/', async (req,res) => {
    
  word = req.body.word

  try {
  const connection = await odbc.connect(connectionString);

    // Execute the SQL query to insert data into the database
    const query = `INSERT INTO DATA (WORD) VALUES (?)`;
    await connection.query(query, [word ]);

    console.log('Data inserted successfully');

  //Close the database connection
     connection.close();

    
  } catch (err) {
    console.error('Error executing SQL query:', err);

    
  }

  res.sendFile(path.join(__dirname, 'index.html'));


  })
  */
