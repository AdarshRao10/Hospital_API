Install React and nodejs.
Install express,pgand cors from npm.

To run postgres command on cms
copy the bin path in system variables.
Then use 'psql -U postgres'
Then enter your postgres password 

'\l' =>show all the databases (DB)
CREATE DATABASE Hospital; <= to create DATABASE
'\c Hospital' to connect to database
'\dt' to see all the tables inside DB

//connecting pg database and server
craete a new file db.js
import it inside the index.js file.

Install Postman Api testing client and inside raw=> select JSON file format
use json data format as shown below:
{
    "name":"John Doe",
    "email":"JohnDoe@gmail.com",
    "phone_no":"7473927848",
    "password":"JohnDoe@123"
}

