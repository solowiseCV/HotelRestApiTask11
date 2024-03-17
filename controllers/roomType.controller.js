
import asyncHandler from 'express-async-handler';
import { saveNewRoomType, fetchAllRoomTypes } from '../services/roomType.service.js';

// Create RoomType
export const createRoomType = asyncHandler(async (req, res) => {
  const { name } = req.body;
  if (!name) {
    throw new Error("Fill all fields");
  }

  //checking number of charaters in name
  if (name < 3) {
    res.status(400);
    throw new Error("Name field must be atleaset 3 charaters")
  }

 //create roomType
  try {
    const newRoomType = await saveNewRoomType({ name });
    res.status(201).json(newRoomType);
  } catch (error) {
    res.status(500);
    throw new Error("Invalid data");
  }
});

// Get All RoomTypes
export const getAllRoomsType = asyncHandler(async (req, res) => {
  try {
    const roomTypes = await fetchAllRoomTypes();
    res.status(200).json(roomTypes);
  } catch (error) {
    res.status(500);
    throw new Error("Room types not found");
  }
});
