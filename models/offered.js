const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const offeredSchema = new Schema({
    name:{ type: String, required: true},
    contact:{type: String, required: true},
    location:{ type: String, required:true},
    house:{ type:Boolean, default:false },
    roomSize:{ type: Number, required:false},
    stayLength:{type:String, required:false},
    dog:{ type:Boolean, default:false},
    cat:{ type:Boolean, default:false },
    med:{ type: Boolean, default:false},
    food:{ type: Boolean, default:false},
    clothing:{ type: Boolean, default:false},
    items:{ type: Boolean, default:false},
    couns:{ type: Boolean, default:false},
    other:{ type: Boolean, default:false},
    img:[{type:String, required:false}],
    text: {type:String, required:true},
    more:{type:String, required:false}
});

const Offered = mongoose.model("Offered", offeredSchema);

module.exports = Offered;