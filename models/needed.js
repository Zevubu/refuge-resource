const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const neededSchema = new Schema({
    name:{ type: String, required: true},
    contact:{type: String, required: true},
    linkToCFofV:{type:String, required:false},
    familySize:{ type: Number, default:1},
    dog:{ type:Boolean, default:false },
    cat:{ type:Boolean, default:false },
    petInfo:{ type:String, required: false},
    location:{ type: String, required:true },
    willingToRelocate:{ type: Boolean, default:false},
    housing:{ type:Boolean, default:false },
    financialSupport: {type:Boolean, default:false},
    med:{ type: Boolean, default:false},
    food:{ type: Boolean, default:false},
    clothing:{ type: Boolean, default:false},
    items:{ type: Boolean, default:false},
    couns:{ type: Boolean, default:false},
    img:[{type:String, required:false}],
    text: {type:String, required:true},
    more:{type:String, required:false}
});

const Needed = mongoose.model("Needed", neededSchema);

module.exports = Needed;