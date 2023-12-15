import express from 'express'
import { allReviews,createReviews } from '../Controllers/reviewController.js'
import { authenticate,restrict } from "../auth/verifyToken.js";

const router = express.Router({mergeParams:true});
router.use((req, res, next) => {
    console.log("Review route reached");
    next();
  });
router
.route('/').get(allReviews)
.post(authenticate,restrict(['patient']),createReviews)
export default router