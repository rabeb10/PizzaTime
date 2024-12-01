const order = require('../models/order');
const jwt = require ('jsonwebtoken');
// new order 
exports.registerOrder=async(req,res)=>{
    const {method, size,crust,QTY,toppings}=req.body;
    try{
        const newOrder = new order({method, size,crust,QTY,toppings}) ;
        await newOrder.save();
        res.status(201).json({message:'félicitations! vous avez créez votre order'});
    }catch(error){
        res.status(400).json({message:error.message});
    }
}
// reorder favorite order
exports.getOrder=async(req,res)=>{
    const {method, size,crust,QTY,toppings}=req.body;
    try{
        const favoriteOrder = await order.findOne({favoriteOrder});

        if (favoriteOrder) {
            const ReorderMyFav = new order({
                method: favoriteOrder.method,
                size: favoriteOrder.size,
                crust: favoriteOrder.crust,
                QTY: favoriteOrder.QTY,
                toppings: favoriteOrder.toppings,
               
            });
           
        }
        };
};
//surprise me
exports.registerOrder = async (req, res) => {
  const { method, size, crust, toppings } = req.body;

  try {
    const randomMethods = [ 'CarryOut','livraison'];
    //on sélectionne une methode aléatoire
    const selectedMethod = method || randomMethods[Math.floor(Math.random() * randomMethods.length)];
    const randomSize= [ 'Large','meduim','mini'];
    const selectedSize = size || randomSize[Math.floor(Math.random() * randomSize.length)];
    const randomCrust= [ 'Thin crust','Thick crust','Cheese-stuffed crust'];
    const selectedCrust = crust || randomCrust[Math.floor(Math.random() * randomCrust.length)];
    const randomToppings= [ 'Olive','Pineapple','Pepperoni','onion'];
    const selectedToppings = toppings|| randomToppings[Math.floor(Math.random() * randomToppings.length)];
    const newOrder = new order({
      method: selectedMethod,
      size:selectedSize,
      crust:selectedCrust,
      toppings:selectedToppings,
    });

    await newOrder.save();
    res.status(201).json({ message: 'voilà votre pizza surprise!'});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
