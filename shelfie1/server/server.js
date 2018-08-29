const express= require('express');
const bodyParser=require('body-parser');
const cors = require('cors');
const massive=require('massive');

require('dotenv').config();

const app= express();
massive(process.env.CONNECTION_STRING).then(dbInstance=>app.set('db',dbInstance))

app.use(bodyParser.json());
app.use(cors());

const port= 3025;
app.listen(port,()=>{console.log(`It's Alive!!! on port ${port}`)})