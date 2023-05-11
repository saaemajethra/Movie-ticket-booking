const express=require('express');
const app=express();
const moongoose = require('mongoose');
const UserRouter=require('./routes/userRoutes');
const adminRouter = require('./routes/adminRoutes');
const movieRouter = require('./routes/moviesRoutes');
const bookingRouter = require('./routes/bookingRoutes');
const dotenv = require('dotenv');
dotenv.config();


// PORT NUMBER 
const cors = require('cors');
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization'); 
    next();
    
})

// middleware routes
app.use(express.json());
app.use('/users',UserRouter);
app.use('/admin',adminRouter);
app.use('/movies',movieRouter);
app.use('/booking',bookingRouter)

moongoose.connect
    ("mongodb+srv://Jethra_Saaena:U76TVkXAyNvHhds0@movie-system.z9iiswb.mongodb.net/").then(() => { console.log("DB Connected"); })


app.listen(4000, () => {
    
    console.log(`Connected to localhost port ${4000}`);
})