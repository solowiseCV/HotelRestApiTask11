import  express from 'express';

import { createRoomType,getAllRoomsType }  from '../controller/roomType.controller.js';
const router = express.Router();


router.post("/rooms-types",createRoomType);
router.get("/rooms-type",getAllRoomsType);

export default router;