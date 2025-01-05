const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs'); // Import bcrypt for password hashing

// Inscription d'un nouvel utilisateur
exports.registerUser = async (req, res) => {
  const { firstname, lastname, email, adress, city, state, password } = req.body;

  try {
    // Vérification si l'email est déjà pris
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'Cet email est déjà utilisé.' });

    // Hash du mot de passe avant de le sauvegarder
    const hashedPassword = await bcrypt.hash(password, 10);

    // Création de l'utilisateur
    const newUser = new User({
      firstname,
      lastname,
      email,
      adress,
      city,
      state,
      password: hashedPassword, // Stocke le mot de passe haché
    });

    await newUser.save();
    res.status(201).json({ message: 'Félicitations! Vous avez créé un compte.' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Connexion d'un utilisateur existant
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Recherche de l'utilisateur par email
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'Compte introuvable. Désolé!' });

    // Comparaison du mot de passe (vérification de correspondance)
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Mot de passe incorrect. Veuillez essayer à nouveau!' });

    // Génération du token JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });

    // Retour du token
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs'); // Import bcrypt for password hashing

// Inscription d'un nouvel utilisateur
exports.registerUser = async (req, res) => {
  const { firstname, lastname, email, adress, city, state, password } = req.body;

  try {
    // Vérification si l'email est déjà pris
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'Cet email est déjà utilisé.' });

    // Hash du mot de passe avant de le sauvegarder
    const hashedPassword = await bcrypt.hash(password, 10);

    // Création de l'utilisateur
    const newUser = new User({
      firstname,
      lastname,
      email,
      adress,
      city,
      state,
      password: hashedPassword, // Stocke le mot de passe haché
    });

    await newUser.save();
    res.status(201).json({ message: 'Félicitations! Vous avez créé un compte.' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Connexion d'un utilisateur existant
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Recherche de l'utilisateur par email
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'Compte introuvable. Désolé!' });

    // Comparaison du mot de passe (vérification de correspondance)
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Mot de passe incorrect. Veuillez essayer à nouveau!' });

    // Génération du token JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });

    // Retour du token
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
