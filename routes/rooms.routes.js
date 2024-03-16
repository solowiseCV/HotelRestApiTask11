
const express = require('express');
const { createRoom, getRoom, getAllRooms, updatedRoom, deleteRoom } = require('../controller/room.controller');
const router = express.Router();


router.post("/rooms",createRoom);
router.get("/rooms",getAllRooms);
router.patch("/rooms/:roomId",updatedRoom);
router.delete("/rooms/:roomId",deleteRoom);
router.get("/rooms/:roomId",getRoom);

module.exports= router