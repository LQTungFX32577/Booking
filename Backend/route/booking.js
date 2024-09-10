const path = require('path');
const hotelController = require('../Controller/hotel');
const express = require('express');

const router = express.Router();

router.get('/hotel', hotelController.getHotel)

router.get('/hotel/:hotelId', hotelController.getDetailHotel )

router.post('/hotel/:hotelId', hotelController.postBookingDetail )

router.get('/checkdate', hotelController.CheckDate )

router.post('/search', hotelController.search)

router.get('/search/:searchId', hotelController.getSearchResult)


module.exports = router;