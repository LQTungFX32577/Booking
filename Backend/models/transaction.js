const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
username: {
        type: String,
        required: true
    },
hotel: {

        type: String,
        require: true
},
rooms:  [
    {
        type: Number,
        require: true
    }
],
dateStart: {
        type: Date,
        required: true
    },
dateEnd: {
        type: Date,
        required: true
    },
price: {
        type: Number,
        required: true
    },
payment: {
        type: String,
        required: true
    },
status: {
        type: String,
        required: true
    },
userId: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    require: true
}
},{ timestamps: true })

module.exports = mongoose.model('transactions', transactionSchema)