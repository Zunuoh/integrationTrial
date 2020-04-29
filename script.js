let express = require('express');
let app = express();

app.get("/index", async(req,res)=>{
    res.render(signinScreen)
});

app.listen(2000, (err)=>{
    if(err){
        console.log("Server down")
    }else{
        console.log("Server is working")
    }
})