const express= require('express');
const bodyParser=require('body-parser');
const cors = require('cors');
const massive=require('massive');

require('dotenv').config();

const Acontroller=require('./ShelfA_Controller');
const Bcontroller=require('./ShelfB_Controller');
const Ccontroller=require('./ShelfC_Controller');
const Dcontroller=require('./ShelfD_Controller');
const path=require('path');

const app= express();
massive(process.env.CONNECTION_STRING).then(dbInstance=>{
    app.set('db',dbInstance)
}).catch(err=>console.log(err));

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname,'src')));

//Table A Endpoints
app.post('/api/product_a',Acontroller.create)
app.get('/api/products_a',Acontroller.readTable)
app.get('/api/product_a/:id',Acontroller.readBin)
app.put('/api/product_a/:id',Acontroller.update)
app.delete('/api/product_a/:id',Acontroller.delete)

//Table B Endpoints
app.post('/api/product_b',Bcontroller.create)
app.get('/api/products_b',Bcontroller.readTable)
app.get('/api/product_b/:id',Bcontroller.readBin)
app.put('/api/product_b/:id',Bcontroller.update)
app.delete('/api/product_b/:id',Bcontroller.delete)

//Table C Endpoints
app.post('/api/product_c',Ccontroller.create)
app.get('/api/products_c',Ccontroller.readTable)
app.get('/api/product_c/:id',Ccontroller.readBin)
app.put('/api/product_c/:id',Ccontroller.update)
app.delete('/api/product_c/:id',Ccontroller.delete)

//Table D Endpoints
app.post('/api/product_d',Dcontroller.create)
app.get('/api/products_d',Dcontroller.readTable)
app.get('/api/product_d/:id',Dcontroller.readBin)
app.put('/api/product_d/:id',Dcontroller.update)
app.delete('/api/product_d/:id',Dcontroller.delete)



const port= 3025;
app.listen(port,()=>{console.log(`It's Alive!!! on port ${port}`)})