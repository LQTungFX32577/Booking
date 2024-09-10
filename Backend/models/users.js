const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    isAdmin: {
        type: Boolean,
    },
    transaction: [
         {
            type: Schema.Types.ObjectId,
            ref: 'transactions',
            required: true
          }
    ] 

});
userSchema.methods.addToCart = function(transaction) {
    this.transaction.push(transaction._id)  
    return this.save();
}

module.exports = mongoose.model('users', userSchema);
