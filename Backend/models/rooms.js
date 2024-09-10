const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');

const Schema = mongoose.Schema;

const roomSchema = new Schema ({
 title: {
    type: String,
    required: true
 },
 price: {
    type: Number,
    required: true
 },
 maxPeople: {
    type: Number,
    required: true
 },
 desc: {
    type: String,
    required: true
 },
 roomNumbers: [
    {
        Number: Number,
        price: Number,
        available: { type : Boolean }
    }
],
 
}, { timestamps: true }
)
roomSchema.plugin(mongoose_delete,{deletedAt: true, overrideMethods:"all"})
module.exports = mongoose.model('rooms', roomSchema);