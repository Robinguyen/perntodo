//load module express
require("dotenv").config();
const express = require("express");
var morgan = require('morgan');
const db = require("./db");
const cors = require("cors")

const app = express();
const port =process.env.PORT || 3000;
//use display value bosy
app.use(express.json());
//morgan show 
app.use(morgan('combined'));
app.use(cors())
//middleware checking request
app.use((req, res, next)=>{
    /*if(req.query.value==1){
        return next();
    }
    res.status(403).json({
        "message": "fail"
    })*/
    next();
});
//GET method
app.get("/api/v1/product", async (req, res)=>{
    try{
        const result = await db.query("select * from product");
        console.log(result);
        res.status(200).json({
            result: result.rows.length,
            status:"success",
            data:{
                "product": result.rows
            }
            
        })
    } catch (err){
        console.log("Eror")
    }
  
});

app.get("/api/v1/product/:id", async (req,res)=>{

    try{
        const result = await db.query(`select * from product where id = ${req.params.id} `)
        res.status(200).json({
            Status: 200,
            data: result.rows
        })

    }
    catch(err){
        console.log("Error")
    }
    console.log(req.params);
});

//create product post method
app.post("/api/v1/product", async (req, res)=>{

    try{
        const result = await db.query("insert into product(name, price, location) values ($1, $2, $3) returning *", [req.body.name, req.body.price,
             req.body.location]);
        console.log(result)
         
    }
    catch(err){
        res.send({
            "status": "Fail"
         })
        console.log("Error")
        
    }
    console.log(req.body);
});
app.put("/api/v1/product/:id", async (req, res)=>{
    
    try{
        const result =  db.query("UPDATE product SET name = $1, price = $2, location = $3 where id = $4 ", [req.body.name, req.body.price, req.body.location,
             req.params.id]);
            console.log(result)

    }
    catch(err){
        console.log("error")
    }

});
//DELETE
app.delete("/api/v1/product/:id", async (req, res)=>{
    try{
        const result = db.query("DELETE FROM product WHERE id = $1", [req.params.id])
        console.log(result)
        res.status(200).json({
            "Status": `Delete Success data id ${req.params.id}`
        })
    }
    catch(err){
        console.log("Error")
    }
});
app.listen(port, () => {
    console.log(`Server running with listening port ${port}`);
});