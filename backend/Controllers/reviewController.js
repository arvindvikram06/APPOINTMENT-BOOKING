import DoctorSchema from "../models/DoctorSchema.js";
import ReviewSchema from "../models/ReviewSchema.js";

export const allReviews = async(req,res) =>{
    try{
        const allreviews = await ReviewSchema.find({})
        res.status(200).json({success:true,message:"found all reviews",data:allreviews})
    }
    catch(err){
        return res.status(404).json({success:false,message:"not found"})
    }
}

export const createReviews = async(req,res) => {

    //   console.log("Req Object:", req); // Add this line
       if(!req.body.doctor) req.body.doctor = req.params.doctorId
       if(!req.body.user) req.body.user = req.userId

       const newReview = new ReviewSchema(req.body);

       try{
        // const userId = req.userId;
        // console.log("User ID:", userId);
        const savedReview = await newReview.save()
        await DoctorSchema.findByIdAndUpdate(req.body.doctor,
            {$push:{reviews:savedReview._id}}
            )
        res.status(200).json({success:true,message:"review saved successfully" ,data:savedReview})
       }
       catch(err){
        res.status(500).json({success:false,message:err.message})
       }
}