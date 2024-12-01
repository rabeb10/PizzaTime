const mongoose= require('mongoose');
const orderSchema=new mongoose.schema({
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
    }
});
module.exports=mongoose.models('order', orderSchema);