import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoute from './routers/auth.js';
import userRoute from './routers/user.js';
import doctorRoute from './routers/doctor.js'
import reviewRoute from './routers/review.js'
import cookieParser from 'cookie-parser';
import bookingRoute from "./routers/booking.js"

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

const corsOptions = {
    origin: true,
    credentials: true,
};

// For testing
app.get('/', (req, res) => {
    res.send('API is working');
});

mongoose.set('strictQuery', false);

// Database connection
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB database connected');
    } catch (err) {
        console.error('MongoDB database connection failed:', err.message);
    }
};

// Middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

app.use('/api/req/auth', authRoute);
app.use('/api/req/users', userRoute);
app.use('/api/req/doctors', doctorRoute);
app.use('/api/req/reviews', reviewRoute);
app.use('/api/req/bookings', bookingRoute);

app.listen(port, () => {
    connect();
    console.log('Server is listening on port', port);
});
