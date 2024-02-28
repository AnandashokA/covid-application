const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const mysql = require('mysql2')
const app = express();
// const port=3306
app.use(cors())
app.use(bodyparser.json())

// Middleware

app.use(bodyparser.urlencoded({ extended: true }));

// database connection

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Anand2040@',
  database: 'covid_vaccine',
  port:3306
});

// check database connection

db.connect(err=>{
  if(err) (console.log(err,'dberr'))
  console.log("database connected!!!!! - ")
})

// get all data
app.get('/newv',(req,res)=>{
    let qr = 'select * from newv';
    db.query(qr,(err,result)=>{
      if(err){
        console.log(err,'errs');
      }
      if(result.length>0){
        res.send({
          message:'all user data',
          data:result
        })
      }

    })
})
app.get('/login',(req,res)=>{
  let qr = 'select * from login';
  db.query(qr,(err,result)=>{
    if(err){
      console.log(err,'errs');
    }
    if(result.length>0){
      res.send({
        message:'all user data',
        data:result
      })
    }

  })
})

// register table
app.get('/register',(req,res)=>{
  let qr = 'select * from register';
  db.query(qr,(err,result)=>{
    if(err){
      console.log(err,'errs');
    }
    if(result.length>0){
      res.send({
        message:'all user data',
        data:result
      })
    }

  })
})

// Signup Endpoint
app.post('/signup', (req, res) => {
  const { username, password, email } = req.body;

  const sql = 'INSERT INTO register (name,email,password) VALUES (?, ?, ?)';
  db.query(sql, [username, password, email], (err, result) => {
    if (err) {
      console.error('Error in signup:', err);
      res.status(500).json({ error: 'Error in signup' });
    } else {
      res.status(201).json({ message: 'Signup successful' });
    }
  });
});

// get single data
app.get('/newv/:CenterId',(req,res)=>{
  let cid = req.params.CenterId;
  let qr = 'SELECT * FROM newv WHERE CenterId = ?';
  db.query(qr,[cid],(err,result) =>{
    if(err){console.log(err);
      res.status(500).send({
      message: 'Internal Server Error'
      });
    }
    if(result.length>0){
      res.status(200).send({
        message: 'Get Single Data',
        data: result[0]
      });

    }
    else{
      res.status(404).send({
        message:'data not found'
      })
    }
  })
})

// post data
//create data

app.post('/user',(req,res)=>{
  console.log(req.body,'createdata');
  let Sno= req.body.Sno;
  let CenterId=req.body.CenterId;
  let VaccinnationCenter= req.body.VaccinnationCenter;
  let address=req.body.address;
  let VacinationBooth=req.body.VacinationBooth;
  let workinghours=req.body.workinghours;
  let Slotsavailable = req.body.Slotsavailable;

  let qr = 'INSERT INTO newv(Sno,CenterId,VaccinnationCenter,address,VacinationBooth,workinghours,Slotsavailable) values ("${Sno}","${CenterId}","${VaccinnationCenter}","${address}","${VacinationBooth}","${workinghours}","${Slotsavailable}")';

  db.query(qr,(err,result)=>{
    if(err){console.log(err)}
    if(result.length>0){
      res.send({
        message:'data inserted'
      })
    }else{
      res.send({
        message:'wrong ..'
      })
    }
  })
})


// / post data/////








app.listen(3000,(err)=>{
  console.log("server is  running" )
})


//********************************************
// *****     every time running this index.js cmd "cd backend" to terminal




