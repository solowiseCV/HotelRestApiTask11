import mongoose from 'mongoose';

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

export default model('RoomType', RoomTypeSchema);



