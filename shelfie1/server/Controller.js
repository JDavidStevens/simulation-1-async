module.exports={



create: (req,res,next)=>{
    const dbInstance=req.app.get('db');
    const {params,body}=req;
    dbInstance.create_bin([params.shelf,params.bin,body.product_name,body.price,body.img])
    .then(product=>res.status(200).send(product))
    .catch(err=>{
        res.status(500).send({errorMessage:"Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
    })
},

readTable: (req,res,next)=>{
    const dbInstance=req.app.get('db');
    
    dbInstance.read_table([req.params.shelf])
    .then(products=>res.status(200).send(products))
    .catch(err=>{
        res.status(500).send({errorMessage:"Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
    })
}, 

readBin:(req,res,next)=>{
    const dbInstance=req.app.get('db');
    
    dbInstance.read_bin([req.params.shelf,req.params.bin])
    .then(product=>{
        res.status(200).send(product)})
    .catch(err=>{
        res.status(500).send({errorMessage:"Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
    })
},

update:(req,res,next)=>{
    const dbInstance=req.app.get('db');
    const {params,body}=req;

    dbInstance.update_bin([params.shelf,params.bin,body.product_name,body.price])
    .then(product=>{
        res.status(200).send(product)})
    
    .catch(err=>{
        res.status(500).send({errorMessage:"Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
    })
},



delete:(req,res,next)=>{
    const dbInstance=req.app.get('db');

    dbInstance.delete_bin([req.params.shelf,req.params.bin])
    .then(()=>res.sendStatus(200))
    .catch(err=>{
        res.status(500).send({errorMessage:"Oops! Something went wrong. Our engineers have been informed!"})
        console.log(err)
    })
}
}