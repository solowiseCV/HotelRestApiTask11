const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const roomTypeRoute = require('./routes/roomType.route');
const roomRoute = require('./routes/rooms.routes');
const errorHandler = require('./middleware/createError');
const dotenv = require('dotenv');
dotenv.config();

const app = express();


//middlewares
app.use(express.json());
app.use(cors());
app.use(bodyParser.json())


// routes
app.use("/api/v1", roomTypeRoute),
app.use("/api/v1", roomRoute),

app.use('*', (req, res) => {
    res.status(404).send('Resource URL not found');
  });



//mongoDb connection
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("MongoDb is with us ...")
}).catch((err)=>{
    console.log(err)
});


//Error middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(5000,()=>{
    console.log("Server running on port", PORT)
})
