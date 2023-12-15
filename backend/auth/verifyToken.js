import jwt from 'jsonwebtoken'
import UserSchema from '../models/UserSchema.js'
import DoctorSchema from '../models/DoctorSchema.js '

export const authenticate = async (req, res, next) => {
    const authToken = req.headers.authorization;
  
    if (!authToken || !authToken.startsWith("Bearer ")) {
      return res.status(401).json({ success: false, message: "no token authorization failed" });
    }
  
    try {
      const token = authToken.split(" ")[1];
  
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      // console.log(decoded.id)
      req.userId = decoded.id;
      req.role = decoded.role;
  
      next(); // next middleware
    } catch (err) {
      if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ message: "Token is expired" });
      }
      return res.status(401).json({ success: false, message: "Invalid token" });
    }
  };

export const restrict = roles => async(req,res,next) => {

    const roles = ['patient','doctor']
    const userId = req.userId;
  //  console.log(userId)
    let user;
    const patient = await UserSchema.findById(userId)
    const doctor = await DoctorSchema.findById(userId)

    if(patient){
        user = patient
    }
    if(doctor){
        user = doctor
    }

    if(!roles.includes(user.role)){
        return res.status(401).json({success:false,message:"you are not authorized"})
    }

     next();
}