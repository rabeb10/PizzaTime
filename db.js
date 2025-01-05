const mongoose = import("mongoose");
const dotenv = import("dotenv");
dotenv.config();
// Votre URI MongoDB
const uri = "mongodb+srv://rabebmersani00:ISGB11447998%23@cluster0.s8479.mongodb.net/pizzaTime?retryWrites=true&w=majority";
// Fonction de connexion
const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
    
    });
    console.log("Connexion à MongoDB réussie !");
  } catch (error) {
    console.error("Erreur lors de la connexion à MongoDB :", error.message);
    process.exit(1);
  }
};
module.exports = connectDB;

// Définir un schéma et un modèle
const pizzaSchema = new mongoose.Schema({
  name: String,
  price: Number,
  size: String,
});

const Pizza = mongoose.model("Pizza", pizzaSchema);

// Fonction pour insérer un document
const insertData = async () => {
  const newPizza = new Pizza({
    name: "Margherita",
    price: 10.99,
    size: "Medium",
  });

  try {
    await newPizza.save(); // Sauvegarde dans la collection "pizzas"
    console.log("Document inséré avec succès !");
  } catch (error) {
    console.error("Erreur lors de l'insertion :", error.message);
  }
};

// Exécution
(async () => {
  await connectDB();
  await insertData();
})();