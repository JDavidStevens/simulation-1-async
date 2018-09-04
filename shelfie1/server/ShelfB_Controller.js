module.exports={


    create: (req,res,next)=>{
        const dbInstance=req.app.get('db');
    
        dbInstance.create_binB()
        .then(product=>res.status(200).send(product))
        .catch(err=>{
            res.status(500).send({errorMessage:"Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
        })
    },
    
    readTable: (req,res,next)=>{
        const dbInstance=req.app.get('db');
        
        dbInstance.read_tableB()
        .then(products=>res.status(200).send(products))
        .catch(err=>{
            res.status(500).send({errorMessage:"Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
        })
    }, 
    
    readBin:(req,res,next)=>{
        const dbInstance=req.app.get('db');
        dbInstance.read_bin_tableB([req.params.id])
    
        .then(product=>{
            console.log(product)
            res.status(200).send(product)})
        .catch(err=>{
            res.status(500).send({errorMessage:"Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
        })
    },
    
    update:(req,res,next)=>{
        const dbInstance=req.app.get('db');
        const {params,body}=req;
        dbInstance.update_binB([params.id,body.product_name,body.price])
        .then(product=>{  
            res.status(200).send(product)})
        
        .catch(err=>{
            res.status(500).send({errorMessage:"Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
        })
    },
    
    delete: (req,res,next)=>{
        const dbInstance= req.app.get('db');
        const {params} = req;
    
        dbInstance.delete_binB([params.id])
        .then(()=>res.sendStatus(200))
        .catch(err=>{
            res.status(500).send({errorMessage:"Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
        })
    }
    }