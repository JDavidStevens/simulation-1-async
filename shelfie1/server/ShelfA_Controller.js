module.exports={


create: (req,res,next)=>{
    const dbInstance=req.app.get('db');

    dbInstance.create_binA()
    .then(product=>res.status(200).send(product))
    .catch(err=>{
        res.status(500).send({errorMessage:"Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
    })
},

readTable: (req,res,next)=>{
    const dbInstance=req.app.get('db');
    
    dbInstance.read_tableA()
    .then(products=>res.status(200).send(products))
    .catch(err=>{
        res.status(500).send({errorMessage:"Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
    })
}, 

readBin:(req,res,next)=>{
    const dbInstance=req.app.get('db');

    dbInstance.read_bin_tableA()
    .then(product=>res.status(200).send(product))
    .catch(err=>{
        res.status(500).send({errorMessage:"Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
    })
},

update:(req,res,next)=>{
    const dbInstance=req.app.get('db');

    dbInstance.update_binA()
    .then((product)=>res.status(200).send(product))
    .catch(err=>{
        res.status(500).send({errorMessage:"Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
    })
},

delete: (req,res,next)=>{
    const dbInstance= req.app.get('db');

    dbInstance.delete_binA()
    .then(()=>res.sendStatus(200))
    .catch(err=>{
        res.status(500).send({errorMessage:"Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
    })
}
}