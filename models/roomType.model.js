const mongoose = require('mongoose');

const {Schema, model} =mongoose;

//creating the schma

const RoomTypeSchema = new Schema({
    
    name: {
        type: String,
        required:true
        
    },
}, {
    timestamps: true
});

const RoomType = model('RoomType', RoomTypeSchema);


module.exports =RoomType;
