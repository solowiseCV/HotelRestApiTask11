
import Room from '../models/rooms.model.js';

export const saveNewRoom = async ({ name, roomType, price }) => {
  try {
    const newRoom = await Room.create({ name, roomType, price });
    return newRoom;
  } catch (error) {
    throw new Error("Invalid Room data");
  }
};

export const fetchAllRooms = async (filters) => {
  try {
    const rooms = await Room.find(filters).populate('roomType').exec();
    return rooms;
  } catch (error) {
    throw new Error("Room Not Found");
  }
};

export const uptoDateRoom = async (roomId, updateData) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(roomId, updateData, { new: true });
    return updatedRoom;
  } catch (error) {
    throw new Error("Something went wrong");
  }
};

export const deleteRoomById = async (roomId) => {
  try {
    await Room.findByIdAndDelete(roomId);
    return "Deleted successfully";
  } catch (error) {
    throw new Error("Something went wrong");
  }
};

export const getRoomById = async (roomId) => {
  try {
    const room = await Room.findById(roomId).populate('roomType').exec();
    if (!room) {
      throw new Error("Room not found");
    }
    return room;
  } catch (error) {
    throw new Error("Something went wrong");
  }
};
