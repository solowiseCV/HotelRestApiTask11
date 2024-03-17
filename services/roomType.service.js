

import RoomType from '../models/roomType.model.js';

export const saveNewRoomType = async ({ name }) => {
  try {

     //check if room exists already with the same name field
  const existingRoomType = await RoomType.findOne({name});
  if(existingRoomType){
    res.status(409);
    throw new Error("Room already exists");
  };
    //create room type
    const newRoomType = await RoomType.create({ name });
    return newRoomType;
  } catch (error) {
    throw new Error("Invalid data");
  }
};

export const fetchAllRoomTypes = async () => {
  try {
    const roomTypes = await RoomType.find();
    return roomTypes;
  } catch (error) {
    throw new Error("Room types not found");
  }
};
