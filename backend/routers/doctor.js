import { deleteDoctor,updateDoctor,singleDoctor,allDoctor, getDoctorProfile } from "../Controllers/doctorController.js";
import { authenticate,restrict } from "../auth/verifyToken.js";
import reviewRouter from './review.js'
import express from 'express'
const router = express.Router();

// router.use((req, res, next) => {
//     console.log("Doctor route reached");
//     next();
//   });
router.use("/:doctorId/reviews",reviewRouter)

router.get('/:id',singleDoctor);
router.get('/',allDoctor);
router.put('/:id',authenticate,restrict(["doctor"]),updateDoctor);
router.delete('/:id',authenticate,restrict(["doctor"] ),deleteDoctor);
router.get('/profile/me',authenticate,restrict(['doctor']), getDoctorProfile)

export default router