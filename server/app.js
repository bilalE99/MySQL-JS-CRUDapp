const express = require('express');
const app = express();
const cors = require('cors');
const dotenv =  require('dotenv');
dotenv.config();

const dbService = require('./dbService');

//allow data to used with backend
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));


//create
app.post('/insert', (request, response) => {

});


//read
app.get('/getAll', (request, response) => {
    response.json({
        success: true
    });
})

//update


//delete


app.listen(5000, () => console.log('app is running'));


    //npm run serve