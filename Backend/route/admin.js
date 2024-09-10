const path = require('path');
const adminController = require('../Controller/admin');
const express = require('express');

const router = express.Router();

router.get('/', (req,res,next) => {
    res.status(200).send('hello from admin')
})
router.post('/', adminController.authAdmin )

router.post('/status', adminController.updateRoomStatus )

router.get('/hotel', adminController.getHotel )

router.get('/hotel-trash', adminController.getHotelTrash )

router.get('/room-trash', adminController.getRoomTrash )

router.get('/room', adminController.getRoom )

router.patch('/hotel-restore', adminController.HotelRestore )

router.patch('/room-restore', adminController.RoomRestore )

router.post('/new-hotel', adminController.createHotel )

router.post('/new-room', adminController.createRoom )

router.post('/delete-hotel', adminController.sorfDeleteHotel )

router.post('/delete-room', adminController.sorfDeleteRoom )

router.delete('/delete-hotel-force', adminController.forceDeleteHotel )

router.delete('/delete-room-force', adminController.forceDeleteRoom )

router.get('/editRoom/:roomId', adminController.getEditRoom )

router.get('/editHotel/:hotelId', adminController.getEditHotel )

router.post('/editHotel/:hotelId', adminController.postEditHotel )

router.post('/editRoom/:roomId', adminController.postEditRoom )

router.post('/delete-user', adminController.DeleteUser )

module.exports = router;