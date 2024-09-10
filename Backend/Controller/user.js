const User = require('../models/users');
const Transaction = require('../models/transaction');
const Pagging = require('../Pagging/Pagie');
exports.addUser = (req,res,next) => {
    const adminUserCheck = req.body.adminToken;
    let admin = false;
    if(adminUserCheck === 'admin'){
        admin = true;
    }
    const user = new User({
        username: req.body.user,
        password: req.body.password,
        fullName: req.body.fullName,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        isAdmin: admin
    });
    user.save()
    .then(result => {
        res.status(200).send('addNew')
        console.log('createUser');
        console.log(result);
    })
    .catch(err => {
        res.status(400).send(err);
      });
}
exports.getUser = (req,res,next) => {
    User.find()
    .then(user => {
        res.status(200).json(user)
    })
    .catch(err => console.log(err));
}

exports.getTransaction = async (req,res,next) => {
    const currentPage = req.params.page || 1;
    const perPage = 3;
    try {
        const Data = await Transaction.find()
       .sort({ createdAt: -1 })
        const transaction = Pagging(Data, perPage, currentPage)
        res.status(200).json(transaction)
       }
    catch(err) { console.log(err) }  
}

exports.getTransactions = (req,res,next) => {
    Transaction.find()
    .then(user => {
        res.status(200).json(user)
    })
    .catch(err => console.log(err));
}