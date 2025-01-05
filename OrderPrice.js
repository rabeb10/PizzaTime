export default function OrderPrices(){
    const OrderPricesArr=[
       {order:"pepperoni",price:3},
       {order:"pineapple",price:4},
       {order:"olive",price:1},
       {order:"onion",price:3},
       {order:"mini",price:5},
       {order:"large",price:10},
       {order:"medium",price:8},
       {order:"thin crust",price:1},
       {order:"thick crust",price:2},
       {order:"Cheese-stuffed crust",price:4}
    ];
    let sum_price=0;
    for(let index in OrderPricesArr){
        sum_price+=OrderPricesArr[index].price;
    }
return[
    <div>
        <h1>Your Order</h1>
        <h1>Method:{method}</h1>
        <h1>QTY:{QTY}</h1>
        <h1>Size:{size}</h1>
        <h1>Crust:{crust}</h1>
        <h1>Toppings:{toppings}</h1>
        <h3>price:{price}</h3>
        <h3>Total:{sum_price}</h3>
    </div>
];
    }