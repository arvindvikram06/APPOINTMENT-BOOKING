
import Doctor from "../models/DoctorSchema.js"
import User from "../models/UserSchema.js";
import BookingSchema from "../models/BookingSchema.js"


export const updateUser = async(req,res) =>{
    const id = req.params.id
    try{    
    const updatedUser = await User.findByIdAndUpdate(id,{$set:req.body},{new:true}).select("-password")
    res.status(200).json({
        success: true,
        message: "successfully updated",
        data:updatedUser
    })
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"failed to update"
        })
    }

}

export const deleteUser = async(req,res) =>{
    const id = req.params.id
    try{    
    const updatedUser = await User.findByIdAndDelete(id, )
    res.status(200).json({
        success: true,
        message: "successfully deleted",
        
    })
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"failed to delete"
        })
    }

}

export const singleUser = async(req,res) =>{
    const id = req.params.id

    try{
        const singleUser = await User.findById(id,).select("-password")
        res.status(200).json({
            success: true,
            message: "successfully found",
            data: singleUser
        })
    }
    catch(error){
        res.status(404).json({
            success:false,
            message:"user not found"
        })
    }
}

export const allUser = async(req,res) =>{
    

    try{
        const allUser = await User.find({}).select("-password")
        res.status(200).json({
            success: true,
            message: "successfully found",
            data: allUser
        })
    }
    catch(error){
        res.status(404).json({
            success:false,
            message:"users not found"
        })
    }
}

export const getUserProfile = async(req,res)=>{
    const userId = req.userId

    try{
        const user = await User.findById(userId)

        if(!user){
            return res.status(404).json({status:false,message:"user not exist"})


        }
        const {password,...rest} = user._doc

        res.status(200).json({success:true,message:"Profile info is getting",data:{...rest}})

    }
    catch(err){
        res.status(500).json({success:false,message:"Something went wrong cannot get"});
    }
}

export const getMyAppointments = async(req,res) =>{

    try{
         //retrieve appoinments from booking for specific user
         const bookings = await BookingSchema.find({user:req.userId})

         // extract doctor ids


         const doctorIds = bookings.map(el=>el.doctor.id)

         //retrieve doctors using doctors ids
         const doctors = await Doctor.find({_id: {$in:doctorIds}}).select('-password')
         
         res.status(200).json({success:true,message:"Appointments are getting",
        data:doctors})



    }
    catch(err){
       res.status(500).json(
        {
            success:false , message:"Something went wrong, cannot get"
        }
       )
    }

}

