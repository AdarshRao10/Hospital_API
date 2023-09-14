CREATE DATABASE Hospital;

--  command to connect to the newly created database
--\c Hospital

CREATE TABLE patients (
    patient_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone_no VARCHAR(20) NOT NULL,
    password VARCHAR(255) NOT NULL
);

SELECT * FROM patients;

-- This command will list all the tables in the current database
-- \d
