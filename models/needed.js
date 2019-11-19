const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const neededSchema = new Schema({
    name:{ type: String, required: true},
    contactInfo:{type: String, required: true},
    linkToCFofV:{type:String, required:false},
    familySize:{ type: Number, default:1},
    numOfPet:{ type:Number, default:0 },
    petInfo:{ type:String, required: false},
    currentCity:{ type: String, required:true },
    willingToRelocate:{ type: Boolean, default:false},
    housing:{ type:Boolean, default:false },
    medicalSupplies:{ type: Boolean, default:false},
    financeSupport: {type:Boolean, default:false},
    food:{ type: Boolean, default:false},
    clothing:{ type: Boolean, default:false},
    houseHoldItems:{ type: Boolean, default:false},
    counsMed:{ type: Boolean, default:false},
    photoLinks:[{type:String, required:false}],
    About: {type:String, required:true},
    moreInfo:{type:String, required:false}
});

const Needed = mongoose.model("Needed", neededSchema);

module.exports = Needed;