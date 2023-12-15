import express from 'express'
import { createBooking, getdoctorBooking, getuserBooking } from '../Controllers/bookingController.js';
import { authenticate } from '../auth/verifyToken.js';
import { restrict } from '../auth/verifyToken.js';
const router = express.Router();
router.post('/',authenticate,restrict(["patient"]),createBooking);
router.get('/',authenticate,getuserBooking);
router.get('/doctors',authenticate,getdoctorBooking);

export default router