const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const offeredSchema = new Schema({
    name:{ type: String, required: true},
    contactInfo:{type: String, required: false},
    locationCity:{ type: String, required:true },
    housing:{ type:Boolean, default:false },
    roomForfamilySize:{ type: Number, required:false},
    lengthOfStay:{type:String, required:false},
    dogOk:{ type:Boolean, default:false },
    catOk:{ type:Boolean, default:false },
    medicalSupplies:{ type: Boolean, default:false},
    financeSupport: {type:Boolean, default:false},
    food:{ type: Boolean, default:false},
    clothing:{ type: Boolean, default:false},
    houseHoldItems:{ type: Boolean, default:false},
    counsMed:{ type: Boolean, default:false},
    photoLinks:[{type:String, required:false}],
    About: {type:String, required:true},
    moreInfor:{type:String, required:false}
});

const Offered = mongoose.model("Offered", offeredSchema);

module.exports = Offered;