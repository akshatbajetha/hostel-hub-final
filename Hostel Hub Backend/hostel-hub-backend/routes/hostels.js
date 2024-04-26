const express = require('express');
const {
    addRoom,
    getHostel,
    getRoom,
    deleteRoom,
    updateRoom,
    getAllHostels
} = require('../controllers/hostelController')


const router = express.Router();

router.get('/:type', getHostel)

router.get('/', getAllHostels)

router.get('/:type/:typeRoom', getRoom)

router.post('/', addRoom)

router.delete('/:type/:typeRoom/:roomNo', deleteRoom)

router.patch('/:roomNo', updateRoom)

module.exports = router;