const Hotel = require('../models/hotels');
const Transaction = require('../models/transaction');
const room = require('../models/rooms');

exports.getHotel = (req,res,next) => { 
    Hotel.find()
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => console.log(err));
}

exports.getDetailHotel = (req,res,next) => {
    Hotel.findById(req.params.hotelId).populate('rooms')
    .then(data => {
        return res.status(200).json(data);
    })
    .catch(err => console.log(err)
    )
}

exports.postBookingDetail = (req,res,next) => {
    console.log(req.body);
    const userTransaction = new Transaction({
        username: req.body.name,
        hotel: req.body.hotel,
        rooms: req.body.room,
        dateStart: req.body.startDay,
        dateEnd: req.body.endDay,
        price: req.body.price,
        payment: req.body.payment,
        userId: req.body.userId,
        status: "Booked"
    })
    userTransaction.save();
    
    
    res.status(200).send('access');
}

exports.CheckDate = (req,res,next) => {
   Transaction.find().then(data => {
        return res.status(200).json(data);
    })
    .catch(err => console.log(err)
    )
    
}

exports.search = (req,res,next) => {
    console.log(req.body);
    Hotel.findOne({city: req.body.place})
    .then(result => {
        res.status(200).json(result)

    })
    .catch(err => console.log(err))
}

exports.getSearchResult = (req,res,next) => {
    Hotel.find().populate('rooms')
    .then(data => {
        return res.status(200).json(data);
    })
    .catch(err => console.log(err)
    )
}
