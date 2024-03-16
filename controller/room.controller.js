import asyncHandler from 'express-async-handler';
import Room from '../models/rooms.model.js';

//create room
export const createRoom = asyncHandler( async (req,res,)=>{
  const {name, roomType,price} = req.body
  if(!name || !price){
    res.status(400)
    throw new Error("fill all the fields");
  };

  try {
      const newRoom = await Room.create({name,roomType,price})
     res.status(201).json(newRoom);
  } catch (error) {
    res.status(500);
     throw new Error("Invalid Room data")
  }
  }) ;



// GET endpoint for fetching all rooms with optional filters
export const getAllRooms =asyncHandler( async (req,res)=>{
  const q = req.query;
  
    try {
      const filters ={
        ...(q.name && {name: q.name}),
        ...(q.roomType && {roomType: q.roomType}),
        ...( (q.minPrice ||q.maxPrice) && {price : {...(q.minPrice && {$gt:q.minPrice}),...(q.maxPrice && {$lt:q.maxPrice}) }
    }),
       ...(q.search && {title:{$regex: q.search ,$options:"i"}})

    }
    try {
      const rooms = await Room.find(filters).populate('roomType').exec();
      res.status(200).json(rooms);
     } catch (err) {
        res.status(404);
        throw new Error("Room Not Found");
}
      } catch (error) {
        res.status(500)
        throw new Error("Something went wrong")
      }
});

//Update room
export const updatedRoom = asyncHandler( async (res,req)=>{
    try {
        const updatedRoom = await Room.findByIdAndUpdate(req.params.roomId, req.body, { new: true });
        res.status(200).json(updatedRoom);
      } catch (error) {
        res.status(500);
       throw new Error("Something went wrong")
      }
});

//Delete Room
export const deleteRoom = asyncHandler( async (res,req)=>{
    try {
        await Room.findByIdAndDelete(req.params.roomId);
        res.status(200).json("Deleted successfully");
      } catch (error) {
        res.status(500);
        throw new Error("Something went wrong")
      }
});

//Get a single using it id
export const getRoom = asyncHandler( async (res,req,)=>{
    try {
        const room = await Room.findById(req.params.roomId).populate('roomType').exec();
        if (!room) {
          res.status(404);
          throw new Error("Room not founf");
        } 
        else {
          res.status(200);
          res.json(room);
        }
      } catch (error) {
        res.status(500);
        throw new Error("Somthing went wrong")
      }
})



