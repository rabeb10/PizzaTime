const order = require('../models/order');

// Register a new order
exports.registerOrder = async (req, res) => {
  const { method, size, crust, QTY, toppings } = req.body;

  try {
    // Validation function for order fields
    validateOrder([method, QTY, size, crust, toppings]);

    const newOrder = new order({ method, size, crust, QTY, toppings });
    await newOrder.save();
    res.status(201).json({ message: 'Félicitations! Vous avez créé votre commande.' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Reorder favorite order
exports.getOrder = async (req, res) => {
  try {
    const favoriteOrder = await order.findOne({ favoriteOrder: true }); 

    if (favoriteOrder) {
      const ReorderMyFav = new order({
        method: favoriteOrder.method,
        size: favoriteOrder.size,
        crust: favoriteOrder.crust,
        QTY: favoriteOrder.QTY,
        toppings: favoriteOrder.toppings,
      });

      await ReorderMyFav.save(); 
      res.status(201).json({ message: 'Votre commande favorite a été créée avec succès!' });
    } else {
      throw new Error("Aucune commande favorite trouvée.");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Surprise me with a random order
exports.surpriseOrder = async (req, res) => {
  const { method, size, crust, toppings } = req.body;

  try {
    // Generate random order values if not provided
    const randomMethods = ['CarryOut', 'Delivery'];
    const selectedMethod = method || randomMethods[Math.floor(Math.random() * randomMethods.length)];

    const randomSizes = ['Large', 'Medium', 'Mini'];
    const selectedSize = size || randomSizes[Math.floor(Math.random() * randomSizes.length)];

    const randomCrusts = ['Thin crust', 'Thick crust', 'Cheese-stuffed crust'];
    const selectedCrust = crust || randomCrusts[Math.floor(Math.random() * randomCrusts.length)];

    const randomToppings = ['Olive', 'Pineapple', 'Pepperoni', 'Onion'];
    const selectedToppings = toppings || randomToppings[Math.floor(Math.random() * randomToppings.length)];

    const newOrder = new order({
      method: selectedMethod,
      size: selectedSize,
      crust: selectedCrust,
      toppings: selectedToppings,
      QTY: 1, 
    });

    await newOrder.save();
    res.status(201).json({ message: 'Voilà votre pizza surprise!', order: newOrder });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Validation function (you can refine this logic)
function validateOrder(fields) {
  for (const field of fields) {
    if (!field) {
      throw new Error("Tous les champs sont nécessaires.");
    }
  }
}
