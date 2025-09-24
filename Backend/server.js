import express from 'express';

const app = express();
app.use(express());

app.get('/',(req,res)=>[
    res.json({msg:'Helloworld'})
])


app.listen(8000,()=>{
    console.log("Running on port 8000");
});
