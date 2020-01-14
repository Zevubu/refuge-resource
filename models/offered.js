const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const offeredSchema = new Schema({
    name:{ type: String, required: true},
    contact:{type: String, required: true},
    location:{ type: String, required:true},
    house:{ type:Boolean, default:false },
    roomSize:{ type: Number, default:1},
    stayLength:{type:String, default:""},
    dog:{ type:Boolean, default:false},
    cat:{ type:Boolean, default:false },
    med:{ type: Boolean, default:false},
    food:{ type: Boolean, default:false},
    clothing:{ type: Boolean, default:false},
    items:{ type: Boolean, default:false},
    couns:{ type: Boolean, default:false},
    other:{ type: Boolean, default:false},
    img:[{type:String, default:"http://www.macedonrangeshalls.com.au/wp-content/uploads/2017/10/image-not-found.png"}],
    text: {type:String, required:true},
    more:{type:String, default:""},
    entered:{type: Date, default: new Date()}
});

const Offered = mongoose.model("Offered", offeredSchema);

module.exports = Offered;
