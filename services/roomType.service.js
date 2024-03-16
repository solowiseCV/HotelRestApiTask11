

import RoomType from '../models/roomType.model.js';

export const saveNewRoomType = async ({ name }) => {
  try {
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
