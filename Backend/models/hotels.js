const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');
const Schema = mongoose.Schema;

const hotelSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    distance: {
        type: String,
        required: true
    },
    photos: 
                {
                    type: Array,
                    required: true
                } ,
    desc: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    featured: {
        type: String,
        required: true
    },
    rooms: [
                { 
                    type: Schema.Types.ObjectId,
                    ref: 'rooms',
                    required: true
                },
    
            ],
    title: {
        type: String,
        require: true
    },
    cheapestPrice: {
        type: Number,
        require: true
    }
    
})
hotelSchema.plugin(mongoose_delete, {deletedAt: true, overrideMethods: "all"})

module.exports = mongoose.model('hotels', hotelSchema)