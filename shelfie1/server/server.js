const express= require('express');
const bodyParser=require('body-parser');
const cors = require('cors');
const massive=require('massive');

require('dotenv').config();

const Acontroller=require('./ShelfA_Controller');

const app= express();
massive(process.env.CONNECTION_STRING).then(dbInstance=>{
    app.set('db',dbInstance)
}).catch(err=>console.log(err));

app.use(bodyParser.json());
app.use(cors());

//Table A Endpoints
app.post('/api/product_a',Acontroller.create)
app.get('/api/products_a',Acontroller.readTable)
app.get('/api/product_a/:id',Acontroller.readBin)
app.put('/api/product_a/:id',Acontroller.update)
app.delete('/api/product_a/:id',Acontroller.delete)

const port= 3025;
app.listen(port,()=>{console.log(`It's Alive!!! on port ${port}`)})