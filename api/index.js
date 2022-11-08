const express = require('express')
const cors = require('cors')


const app =express()
const port= 3000


let transactionArr = []
//#region
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json({
    type: "*/*"
}))

app.use(cors());
//#endregion


//Cuando te hagan un get  http://localhost:3000/transactions
app.get('/transactions',(req,res)=>{
    res.send(JSON.stringify(transactionArr));
})

//Cuando te hagan un post  http://localhost:3000/transactions
app.post('/transactions',(req,res)=>{
    let transaction = req.body;
    transactionArr.push(transaction);
    res.send(JSON.stringify("Guardada"));
    console.log(transactionArr);
    //res.send('Me hicieron un post')
})

app.listen(port,() =>{
    console.log(`Estoy ejecutandome en http://localhost:${port}`)
})



