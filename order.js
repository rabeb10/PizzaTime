export default OrderPrices;
import OrderPrices from './OrderPrice';
import affichage from './affichage';
import { schema, models } from 'mongoose';
const orderSchema=new schema({
    method:{
        type : String ,
        required : true,
        minlength : 3,
        maxlength : 10
    },
    size : {
        type : String ,
        required : true,
        minlength : 4,
        maxlength : 12
    },
    crust :{
        type : String ,
        required : true,
        minlength : 4,
        maxlength : 10
    },
    QTY :{
        type : Number ,
        required : true,
        
    } ,
    toppings : {
        type : String,
        required : true
    },
    price :{
        type : Number ,
        required : true,
        
    }
});
function validateOrder(orderItems) {
    const [method, qty, size, crust, toppings] = orderItems;
    const validMethods = ['CarryOut', 'Delivery'];
    const validSizes = ['mini', 'medium', 'large'];
    const validCrusts = ['thin crust', 'thick crust', 'cheese-stuffed crust'];
    const validToppings = ['pepperoni', 'olives', 'onions', 'pineapple'];
  
    // Verify method
    if (!validMethods.includes(method)) {
      throw new Error(`méthode invalide: ${method}. veuillez choisir ${validMethods.join(', ')}`);
    }
  
    // Verifiier quantité
    if (isNaN(qty) || qty <= 0) {
      throw new Error(`quantité invalide: ${qty}. la quatité doit etre > 0`);
    }
  
    // Verifier taille
    if (!validSizes.includes(size.toLowerCase())) {
      throw new Error(`taille invalide: ${size}. veuillez choisir ${validSizes.join(', ')}`);
    }
  
    // Verifier crust
    if (!validCrusts.includes(crust.toLowerCase())) {
      throw new Error(`crust invalide: ${crust}. veuillez choisir ${validCrusts.join(', ')}`);
    }
  
    // Verifier toppings
    const toppingsList = toppings.split(',').map((t) => t.trim().toLowerCase());
    for (const topping of toppingsList) {
      if (!validToppings.includes(topping)) {
        throw new Error(`topping invalide: ${topping}. Choose ${validToppings.join(', ')}`);
      }
    }
  
    return true; // avec succes
  }

affichage(orderItems, totalPrice);
