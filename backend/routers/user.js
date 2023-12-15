import { deleteUser,updateUser,singleUser,allUser,getUserProfile,getMyAppointments } from "../Controllers/userController.js";
import { authenticate,restrict } from "../auth/verifyToken.js";
import express from 'express'
const router = express.Router();

router.get('/:id',authenticate,restrict(["patient"]),singleUser);
router.get('/',authenticate,restrict(["admin"]),allUser);
router.put('/:id',authenticate,restrict(["patient"]),updateUser);
router.delete('/:id',authenticate,restrict(["patient"]),deleteUser);
router.get('/:profile/me',authenticate,restrict(["patient"]),getUserProfile);
router.get('/appointments/my-appointments',authenticate,restrict(["patient"]),getMyAppointments);

export default router