function affichage(orderItems, totalPrice) {
    const [method, qty, size, crust, toppings,price] = orderItems;

    console.log("------- YOUR ORDER -------");
    console.log(`Method: ${method}`);
    console.log(`QTY: ${qty}`);
    console.log(`Size: ${size}`);
    console.log(`Crust: ${crust}`);
    console.log(`Toppings: ${toppings}`);
    console.log(`Prices: ${price}`);
    console.log("-----------------------------");
    console.log(`Total:${totalPrice}`);
}