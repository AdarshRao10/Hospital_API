const express =  require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

//Middleware
app.use(cors());

//Helps us to access the req.body when a request is made and the request type is json
app.use(express.json());

//ROUTES TO PERFORM CRUD (Create, Read, Update, Delete)

//create a patient (Create)

app.post('/register',async(req,res)=>{
 try {
    //console.log(req.body);
    const {name,email,phone_no,password} = req.body;

    // Insert the new patient into the "patient" table
    const insertQuery = `
      INSERT INTO patients (name, email, phone_no, password)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;

    const values = [name, email, phone_no, password];

    const result = await pool.query(insertQuery, values);

    //returning response
    res.json(result.rows[0]);
    

 } catch (error) {
    console.log(error.message);
 }
});

//get all patients (Read) 

app.get('/getAllPatients',async(req,res)=>{
  try {
    // Get all paitents data from patients table
    const getQuery = `SELECT * FROM patients`;

    const result = await pool.query(getQuery);

    //returning response
    res.json(result.rows);
    
  } catch (error) {
    console.log(error.message);
  }
});


//get specific patients (Read) 

app.get('/getPatient/:id',async(req,res)=>{
    try {
      // Get specific paitent data from patients table
      const getQuery = `SELECT * FROM patients
      WHERE email = $1;
      `;

      const {id} = req.params; //we get id from the parameter
      const values = [id];
  
      const result = await pool.query(getQuery,values);
  
      //returning response
      res.json(result.rows);
      
    } catch (error) {
      console.log(error.message);
    }
  });

//update patient details (Update)

app.put('/updatePatient/:id', async (req, res) => {
    try {
      const { id } = req.params; // we get id from the parameter
      const { newName } = req.body; // assuming the new name is send in the request body
  
      // Update the name of the patient where email matches the provided id
      const updateQuery = `
        UPDATE patients
        SET name = $1
        WHERE email = $2
        RETURNING *;
      `;
  
      const values = [newName, id];
  
      const result = await pool.query(updateQuery, values);
  
      //returning response
      res.json(result.rows);
      console.error("Details Updated!!");

    } catch (error) {
      console.error(error.message);
    }
  });
  

//delete patient details (Delete)

app.delete('/deletePatient/:id', async (req, res) => {
    try {
      const { id } = req.params; // Get the email from the URL parameter
  
      // Delete the patient where the email matches the provided email
      const deleteQuery = `
        DELETE FROM patients
        WHERE email = $1
        RETURNING *;
      `;
  
      const values = [id];
  
      const result = await pool.query(deleteQuery, values);
  
      if (result.rows.length === 0) {
        res.status(404).json({ error: 'Patient not found' });
      } else {
        // Return the deleted patient data
        console.error("Patient details deleted!!");
        res.json(result.rows[0]);
      }
    } catch (error) {
      console.error(error.message);
    }
  });
  


app.listen(5000,()=>{
    console.log("Server running on port no 5000");
})