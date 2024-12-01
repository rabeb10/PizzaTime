const User = require('../models/user');
const jwt = require ('jsonwebtoken');
//inscription d'un nouvel utilisateur qui n'a pas un compte
exports.registerUser=async(req,res)=>{
    const {firstname, lastname,email,adress,city,state,password}=req.body;
    try{
        const newUser= new User({firstname, lastname,email,adress,city,state,password}) ;
        await newUser.save();
        res.status(201).json({message:'félicitations !vous avez créez un compte'});
    }catch(error){
        res.status(400).json({message:error.message});
    }
};
//connexion d'un utilisateur existant
exports.loginUser=async(req,res)=>{
    const {email,password}=req.body;
    try{
        const user=await User.findOne({email});
        if(!user) return res.status(404).json({message:'compte introuvable desole!'});

        const isMatch = await user.matchPassword(password);
        if(!isMatch) return res.status(400).json({message:'Mot de passe incorrect veuillez essayer de nouveau svp!'});

        //génération d'un token JWT(voir annexe jwt)
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET,
            {expiresIn:'30d'});
        res.json({token}) ;     
} catch(error){
    res.status(500).json({message:error.message});
}
};


