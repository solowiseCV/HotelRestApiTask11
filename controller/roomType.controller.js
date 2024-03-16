const asyncHandler = require('express-async-handler');
const RoomType = require('../models/roomType.model');


//create roomtype
const createRoomType = asyncHandler( async (req,res,)=>{
 const {name}= req.body;
 if(!name) {
  throw new Error("Fill all fields");
 }

 try {
    const newRoomType =await RoomType.create({name});
    res.status(201).json(newRoomType)
 
 } catch (error) {
    throw new Error("Invalid data")
 }
}
);


//get All room type
const getAllRoomsType = asyncHandler( async (req,res)=>{
   try {
      const roomTypes = await RoomType.find();
      res.status(200).json(roomTypes);
    } catch (error) {
     throw new Error("Room type not found")
    }
 
});

module.exports ={
    createRoomType,
    getAllRoomsType,
   
}