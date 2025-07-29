const express=require("express")
const path=require("path")
const mongo=require("mongoose")
const app=express()
mongo.connect("mongodb+srv://nandeesh:Nandbtech07@cluster0.ko2qcxc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>console.log("Mongo connected"))
const User=mongo.model("user",{name:String,email:String,password:String});
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname)))
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
})
app.post("/signup",(req, res) => {
        const user = new User({
            name:req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        user.save();
    res.sendFile(path.join(__dirname,"index.html"))
});
app.listen(3000,()=>{
    console.log("server is running")
})