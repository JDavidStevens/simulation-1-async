module.exports={


// create: (req,res,next)=>{
//     const dbInstance=req.app.get('db');
//     const {params,body}=req;
//     dbInstance.create_binA([params.id,body.product_name,body.price,body.img])
//     .then(product=>res.status(200).send(product))
//     .catch(err=>{
//         res.status(500).send({errorMessage:"Oops! Something went wrong. Our engineers have been informed!"});
//         console.log(err)
//     })
// },

// readTable: (req,res,next)=>{
//     const dbInstance=req.app.get('db');
    
//     dbInstance.read_tableA()
//     .then(products=>res.status(200).send(products))
//     .catch(err=>{
//         res.status(500).send({errorMessage:"Oops! Something went wrong. Our engineers have been informed!"});
//         console.log(err)
//     })
// }, 

// readBin:(req,res,next)=>{
//     const dbInstance=req.app.get('db');
//     dbInstance.read_bin_tableA([req.params.id])

//     .then(product=>{
//         console.log(product)
//         res.status(200).send(product)})
//     .catch(err=>{
//         res.status(500).send({errorMessage:"Oops! Something went wrong. Our engineers have been informed!"});
//         console.log(err)
//     })
// },

// update:(req,res,next)=>{
//     const dbInstance=req.app.get('db');
//     const {params,body}=req;
//     dbInstance.update_binA([params.id,body.product_name,body.price])
//     .then(product=>{
//         console.log(product)  
//         res.status(200).send(product)})
    
//     .catch(err=>{
//         res.status(500).send({errorMessage:"Oops! Something went wrong. Our engineers have been informed!"});
//         console.log(err)
//     })
// },

// delete: (req,res,next)=>{
//     const dbInstance= req.app.get('db');
//     const {params} = req;

//     dbInstance.delete_binA([params.id])
//     .then(()=>res.sendStatus(200))
//     .catch(err=>{
//         res.status(500).send({errorMessage:"Oops! Something went wrong. Our engineers have been informed!"});
//         console.log(err)
//     })
// }
// }


//Revised sketch

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
    
    dbInstance.read_table2([req.params.shelf])
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