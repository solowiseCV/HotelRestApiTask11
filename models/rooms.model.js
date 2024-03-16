import mongoose  from 'mongoose';

const {Schema, model} = mongoose;



const RoomSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please fill the name field"],
        trim: true,
    },
    roomType: { 
        type: Schema.Types.ObjectId,
        ref: 'RoomType',
    },
    price: {
        type: Number,
        required: [true, "Please input the price"],
    },
}, {
    timestamps: true
});



export default model('Room', RoomSchema);


