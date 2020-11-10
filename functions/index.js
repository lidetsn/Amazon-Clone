const functions = require('firebase-functions');
const express =require("express")
const cors=require("cors")
const stripe=require("stripe")
("YOUR STRIPE SECRET KEY")

//const PORT =8000|| process.env.PORT



const app=express()
app.use(express.json())
app.use(cors({origin:true}))

// app.get("/", (req,res,next)=>{
//     res.send("welcome to express")
// })

app.post("/payments/create", async (req,res)=>{
    try {
        const total=req.query.total
        console.log("payement recieved")
    
        const paymentIntent =await stripe.paymentIntents.create({
                        amount:total,
                        currency:"usd"
                      })
    
        res.status(200).send({
            clientSecret:paymentIntent.client_secret
        })
        
    } catch (error) {
        console.log(error)
        
    }
   
   
})



exports.api = functions.https.onRequest(app);


