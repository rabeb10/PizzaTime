const express = import("express");
const app = express();
app.use(express.json());
const mongoose = import('mongoose');
const userSchema = new mongoose.Schema({
  firstname: {
      type : String,
      required : true,
      minlength : 3,
      maxlength : 20
  },
  lastname: {
      type : String,
      required : true,
      minlength : 3,
      maxlength : 20
  },
  email: {
      type : String,
      required : true,
      unique : true,
      minlength : 10,
      maxlength : 30
  },

  adress: {
      type : String,
      required : true,
      unique : true,
      minlength : 5,
      maxlength :30 
  },

  city : {
      type : String,
      required : true,
      minlength : 5,
      maxlength :20 
  },

  state : {
      type : String,
      required : true,
      unique : true,
      length : 1
  },


   password: {
      type : String,
      required : true,
      minlength : 6,
  }


})
//middleware pour hacher le mot de passe avant de dsauveegarder l'utilisateur
userSchema.pre('save',async function(next){
  if(!this.isModified('password'))return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password.salt);
  next()
})
//methode pour comparer les mots de passe
userSchema.methods.matchPassword= async function(enteredPassword){
  return await bcrypt.compare(enteredPassword,this.password);
};
const user=mongoose.model('user',userSchema);
module.exports= user;
function validateUser(user) {
    const { firstName, lastName, email, city, state ,password} = user;
  
    // verification du prénom
    if (!firstName || firstName.trim() === "") {
      throw new Error("veuillez saisir un nom");
    }
  
    // verification du nom
    if (!lastName || lastName.trim() === "") {
      throw new Error("veuillez saisir un prénom");
    }
  
    // verification de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (!email || !emailRegex.test(email)) {
      throw new Error("l'adresse email est invalide");
    }
    // verification de city
  if (!state || city.trim() === "") {
    throw new Error("veuillez saisir un city");
  }
  // verification de l'etat
  if (!state || state.trim() === "") {
    throw new Error("veuillez saisir un etat");
  }
    // verification du mot de passe
    if (!password || password.length < 6) {
      throw new Error("le mdp doit contenir au moins 6 caractères");
    }
  
    return true; // Succes
  }

  app.post("./ValidateUser", (req, res) => {
    try {
      const user = req.body;
  
      // appeler validateuser
      validateUser(user);
  
      // succces
      return res.status(200).json({ message: "l'utilisateur est valide" });
    } catch (error) {
      // erreur
      return res.status(400).json({ error: error.message });
    }
  });
  module.exports = mongoose.model('User', userSchema);
