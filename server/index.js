const express = require('express');
const app = express();
const port = 3000;
const mobiles = require("./mobiles.json");
var cors = require('cors');
app.use(cors());
app.get("/mobiles",(req,res)=>{
    res.send(mobiles);
})
app.get("/mobiles/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const mobile = mobiles.find(mobile=>mobile.id===id);
    res.send(mobile);
})
app.listen(port,()=>{
    console.log(`Listening from port: ${port}`)
})