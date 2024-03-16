const express = require('express');

const { createRoomType,getAllRoomsType } = require('../controller/roomType.controller');
const router = express.Router();


router.post("/rooms-types",createRoomType);
router.get("/rooms-type",getAllRoomsType);

module.exports= router;