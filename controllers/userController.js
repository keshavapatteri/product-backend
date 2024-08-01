const UserModel=require("../models/users")
const SignUpJoi= require("../validation/signupJoi.jsx")




const SignUp = async(req,res)=>{
    const data = req.body
   
    console.log(data)
    await SignUpJoi.validateAsync(data)
    const toSave = new UserModel(data)
    await toSave.save()
    res.status(200).send("Added sucessFully")

}
//login
const Login = async(req,res)=>{
    const data = req.body
   console.log(data)
    await SignUpJoi.validateAsync(data)

    //check in moongo db
    const isExist = await UserModel.findOne({email:req.body.email,password:req.body.password})
if(!isExist) throw new Error("User not Found")

    res.status(200).send({status:true,message:"success"})

}


module.exports = {SignUp,Login}

