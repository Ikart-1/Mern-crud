import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import { Company } from './models/CompanyModel.js'

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    console.log(req)
    return res.status(234).send('hi')
})

// save new company
app.post('/company', async (request, response) => {
    try {
        if (
            !request.body.name ||
            !request.body.description ||
            !request.body.website ||
            !request.body.employees ||
            !request.body.active 
         ){
            return response.status(400).send({
               message:'send all required fields: name , description , website , employees , active',
            });
         }
         const newCompany = {
            name: request.body.name,
            description:request.body.description,
            website:request.body.website,
            employees:request.body.employees,
            active:request.body.active,
         };
         const company = await Company.create(newCompany);
         return response.status(201).send(company);
    }
    catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

// get company
app.get('/company', async (request, response) => {
    try {
         const company = await Company.find({});
         return response.status(200).json({
            count: company.length,
            data : company
         });
    }
    catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    })