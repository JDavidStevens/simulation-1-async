const express= require('express');
const bodyParser=require('body-parser');
const cors = require('cors');
const massive=require('massive');

require('dotenv').config();

const Controller=require('./Controller');
const path=require('path');

const app= express();
massive(process.env.CONNECTION_STRING).then(dbInstance=>{
    app.set('db',dbInstance)
}).catch(err=>console.log(err));

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname,'src')));

app.post('/api/product/:shelf/:bin',Controller.create)
app.get('/api/products/:shelf',Controller.readTable)
app.get('/api/product/:shelf/:bin',Controller.readBin)
app.put('/api/product/:shelf/:bin',Controller.update)
app.delete('/api/product/:shelf/:bin',Controller.delete)

const port= 3025;
app.listen(port,()=>{console.log(`It's Alive!!! on port ${port}`)})

