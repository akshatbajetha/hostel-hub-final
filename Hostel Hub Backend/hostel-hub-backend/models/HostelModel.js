const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hostelRoomSchema = new Schema({
    hostelType: String,
    roomType: String,
    roomNo: String,
    roomStatus: String,
    bookedBy: {
      name: String,
      enrollmentNumber: String
    }
});

module.exports =  mongoose.model('Hostel', hostelRoomSchema);