const express=require('express');
const bodyparser=require('body-parser');
const{v4:uuidv4}=require('uuid');

const app=express();
app.use(bodyparser.json());

//to store transactions
let transactions=[];

app.post("/payment",(req,res)=>{
    const{amount,method}=req.body;
    //Expect this from frontend

    const transactionId=uuidv4();//unique transaction id

    const status=Math.random() > 0.5 ? "success" : "failed"; //random success or failure

    const transaction={
        transactionId,
        amount,
        method,
        status,
        createdAt:new Date(),
    };

    transactions.push(transaction);

    res.json({
        message:"payment processed",
        transaction,
    });

    app.get("/transactions",(req,res)=>{
        res.json(transactions);
    });

})
app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})