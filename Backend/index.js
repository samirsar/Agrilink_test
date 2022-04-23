const connectToMongo=require('./db');

const express = require('express')
const app = express()
const port = 5000
const cors=require('cors');
connectToMongo();
app.use(express.json());
app.use(cors())
app.get('/',(req,res)=>{
    res.send("hii what about you");
})

app.use('/api/auth',require('./routes/auth'));
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })