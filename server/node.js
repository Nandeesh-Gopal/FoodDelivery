const express=require("express")
const path=require("path")
const mongo=require("mongoose")
const app=express()
mongo.connect("").then(()=>console.log("Mongo connected"))
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
        user.save().then(()=>{
            res.redirect("/?message="+encodeURIComponent("Welcome "+req.body.name+"!"))
        })
});
app.post("/login",async (req,res)=>{
    const {email,password}=req.body
    const user= await User.findOne({email})
    if(!user){
        return res.redirect("/login.html?message=User not found")
    }
    if(user.password!=password){
        return res.redirect("/login.html?message=Incorrect Password")
    }
    return res.redirect("/?message=Welcome "+encodeURIComponent(user.name))
})
app.listen(3000,()=>{
    console.log("server is running")
})
