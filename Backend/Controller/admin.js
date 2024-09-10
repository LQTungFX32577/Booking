const User = require('../models/users');
const Transaction = require('../models/transaction');
const Hotel = require('../models/hotels');
const Room = require('../models/rooms');

exports.authAdmin = (req,res,next) => {
    User.findOne({username: req.body.username})
    .then(data => {
      console.log(data);
      
        if(data.isAdmin === true && data.password === req.body.password) {
            res.status(200).json(data)
        }else{
            res.status(300).send('invalid user or password !')
        }
    })
    .catch(err => console.log(err)
    )
}

exports.updateRoomStatus = (req,res,next) => {
    Transaction.findByIdAndUpdate(req.body.data, { status: req.body.status }, { new: true })
    .then(data => res.status(200).json(data))
    .catch(err => console.log(err)
    )
}
exports.HotelRestore = (req,res,next) => {
    Hotel.restore({_id: req.body.id})
    .then(result => {
      res.status(201).send('restore')
    })
}
exports.RoomRestore = (req,res,next) => {
  Room.restore({_id: req.body.id})
  .then(result => {
    res.status(201).send('restore')
  })
}

exports.getHotel = (req,res,next) => {
    Hotel.find()
    .then(data => res.status(200).json(data))
    .catch(err => console.log(err))
}
exports.getHotelTrash = (req,res,next) => {
    Hotel.findWithDeleted({deleted: true})
    .then(data => res.status(200).json(data))
    .catch(err => console.log(err))
}

exports.getRoom = (req,res,next) => {
    Room.find()
    .then(data => res.status(200).json(data))
    .catch(err => console.log(err))
}
exports.getRoomTrash = (req,res,next) => {
    Room.findWithDeleted({deleted: true})
    .then(data => res.status(200).json(data))
    .catch(err => console.log(err))
}

exports.createHotel = (req,res,next) => {
    const image = req.body.image.split(",");
    
    
    const newHotel = new Hotel({
        name: req.body.name,
        type: req.body.type,
        city: req.body.city,
        address: req.body.address,
        distance: req.body.distance,
        photos: image,
        desc: req.body.description,
        rating: req.body.rate,
        featured: req.body.featured,
        rooms: req.body.room,
        title: req.body.title,
        cheapestPrice: req.body.price 
    })
    newHotel.save()
    .then(result => {
        res.status(200).send('addNew')
        console.log('creatHotel');
        console.log(result);
    })
    .catch(err => {
        res.status(400).send(err);
      });
}

exports.createRoom = (req,res,next) => {
    console.log(req.body);
    
    const newRoom = new Room({
        title: req.body.title,
        desc: req.body.description,
        maxPeople: req.body.maxPeople,
        price: req.body.price,
        roomNumbers: req.body.roomNumbers
    })
    newRoom.save().then(result => {
        res.status(200).send('addNew');
        console.log(result);
        
    }) .catch(err => {
         res.status(400).send(err);
    });
}

exports.forceDeleteHotel = (req, res, next) => {
    Hotel.findByIdAndDelete(req.body.id)
      .then(() => {
        console.log("Deleted Hotel");
        res.status(200).send('deleted')
      })
      .catch(err => console.log(err));
  };
  exports.sorfDeleteHotel = (req, res, next) => {
    Hotel.delete({_id: req.body.id})
      .then(() => {
        console.log("Deleted Hotel");
        res.status(200).send('deleted')
      })
      .catch(err => console.log(err));
  };

exports.sorfDeleteRoom = (req, res, next) => {
    Room.delete({_id: req.body.id})
      .then(() => {
        console.log("Deleted Room");
        res.status(200).send('deleted')
      })
      .catch(err => console.log(err));
  };
  exports.forceDeleteRoom = (req, res, next) => {
    Room.findByIdAndDelete(req.body.id)
      .then(() => {
        console.log("Deleted Room");
        res.status(200).send('deleted')
      })
      .catch(err => console.log(err));
  };

exports.DeleteUser  = (req, res, next) => {
  User.findByIdAndDelete(req.body.id)
    .then(() => {
      console.log("Deleted Room");
      res.status(200).send('deleted')
    })
    .catch(err => console.log(err));
}; 

  exports.getEditRoom  = (req, res, next) => {
    Room.findById(req.params.roomId)
      .then((result) => {
        console.log(result);
        
        res.status(200).json(result)
      })
      .catch(err => console.log(err));
  };

  exports.getEditHotel  = (req, res, next) => {
    Hotel.findById(req.params.hotelId).populate('rooms')
      .then((result) => {
        console.log(result);
        
        res.status(200).json(result)
      })
      .catch(err => console.log(err));
  };

  exports.postEditHotel = (req, res, next) => {
    const image = req.body.image.split(",");
    Hotel.findByIdAndUpdate(req.params.hotelId,
        {
            name: req.body.name,
            type: req.body.type,
            city: req.body.city,
            address: req.body.address,
            distance: req.body.distance,
            photos: image,
            desc: req.body.description,
            rating: req.body.rate,
            featured: req.body.featured,
            rooms: req.body.room,
            title: req.body.title,
            cheapestPrice: req.body.price 
        },
        {new: true}
    )
      .then((result) => {
        console.log(result);
        
        res.status(200).json(result)
      })
      .catch(err => console.log(err));
  };

  exports.postEditRoom = (req, res, next) => {
    Room.findByIdAndUpdate(req.params.roomId,
        {
            title: req.body.title,
            desc: req.body.description,
            maxPeople: req.body.maxPeople,
            price: req.body.price,
            roomNumbers: req.body.roomNumbers
        },
        { new: true }
    )
      .then((result) => {
        console.log(result);
        
        res.status(200).json(result)
      })
      .catch(err => console.log(err));
  };