const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const CORS=require('cors')
const app = express();
const port = 3600;

// app.use(CORS);
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Anand2040@',
  database: 'covid'
});

connection.connect();

// Enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.post('/employees', (req, res) => {
  const { centerID, centerLocality, boothno, slots } = req.body;
  const query = `INSERT INTO centers (centerID, centerLocality, boothno, slots) VALUES (?, ?, ?, ?)`;
  connection.query(query, [centerID, centerLocality, boothno, slots], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Error inserting employee data' });
    } else {
      res.status(201).json({ message: 'Employee data inserted successfully' });
    }
  });
});

app.post('/submit-form', (req, res) => {
  const { name, locality, email, phone, slot_timing } = req.body;
  const sql = `INSERT INTO bookings (name, locality, email, phone, slot_timing) VALUES (?, ?, ?, ?, ?)`;
  connection.query(sql, [name, locality, email, phone, slot_timing], (error) => {
    if (error) {
      console.error('Error inserting data:', error);
      return res.status(500).json({ message: 'Error inserting data' });
    }
    console.log('Data inserted successfully');
    return res.status(200).json({ message: 'Data inserted successfully' });
  });
});


//   connection.query(sql, values, (err, result) => {

// });
// Add a new route to fetch all employees
app.get('/employees', (req, res) => {
  const query = `SELECT * FROM centers`;
  connection.query(query, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching employee data' });
    } else {
      res.status(200).json(results);
    }
  });
});
app.post('/book-slot', (req, res) => {
  const { centerID } = req.body;

  // Assuming you have an Employee table with an id field
  const query = `UPDATE centers SET slots = slots - 1 WHERE id = ?`;

  connection.query(query, [employeeId], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Error booking slot' });
    } else {
      res.status(200).json({ message: 'Slot booked successfully' });
    }
  });
});
app.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  connection.query(query, [name, email, password], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Error registering user' });
    } else {
      res.status(201).json({ message: 'User registered successfully' });
    }
  });
});

// User login endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
  connection.query(query, [email, password], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Error logging in' });
    } else if (results.length === 0) {
      res.status(401).json({ message: 'Invalid email or password' });
    } else {
      res.status(200).json({ message: 'Login successful', user: results[0] });
    }
  });
});






app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
