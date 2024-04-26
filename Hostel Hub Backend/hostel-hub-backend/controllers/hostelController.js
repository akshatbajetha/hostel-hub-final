const  Hostel = require('../models/HostelModel')
const mongoose = require('mongoose');

//GET Hostel
const getHostel = async(req, res) => {
    const {type} = req.params

    try{
        const hostels  = await Hostel.find({hostelType: type});
        if (!hostels) {
            return res.status(404).json({ error: 'Hostel not found' });
        }
        res.status(200).json(hostels);
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

const getAllHostels = async(req, res) => {
    try{
        const allHostels = await Hostel.find({});

        res.status(200).json(allHostels);
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}


//GET Hostel Room
const getRoom = async(req, res) => {
    const hType = req.params.type;
    const rType = req.params.typeRoom;

    try{

        const rooms  = await Hostel.find({hostelType: hType, roomType: rType});
       
        if(!rooms){
            return res.status(404).json({error: "No such Room Exist"})
        }
        res.status(200).json(rooms);
    }
    catch(error){
        res.status(400).json({error: error.message})
    }

}


//POST New Hostel Room
const addRoom = async(req, res) => {
    const {hostelType, roomType, roomNo, roomStatus, bookedBy} = req.body

    try{
        const hostel = await Hostel.create({hostelType, roomType, roomNo, roomStatus, bookedBy});
        res.status(200).json(hostel);
    } catch(error){
        res.status(400).json({error: error.message})
    }
}


//DELETE Hostel Room
const deleteRoom = async (req ,res) => {
    const hType = req.params.type;
    const rType = req.params.typeRoom;
    const rNumber = req.params.roomNo;

    const room = await Hostel.findOneAndDelete({hostelType: hType, roomType: rType, roomNo: rNumber})

    if(!room){
        return res.status(400).json({error: 'No such room'})
    }

    res.status(200).json(room);
}


//UPDATE Hostel Room Details
const updateRoom = async(req, res) => {
    const rNumber = req.params.roomNo;

    const room = await Hostel.findOneAndUpdate({roomNo: rNumber}, {
        roomStatus: "Partially Occupied",
        bookedBy: {
            name: req.body.name,
            enrollmentNumber: req.body.enrollmentNo
        }

    })
    if(!room){
        return res.status(400).json({erro: 'No such room'})
    }
    res.status(200).json(room);
}




module.exports = {
    addRoom,
    getHostel,
    getRoom,
    deleteRoom,
    updateRoom,
    getAllHostels
}