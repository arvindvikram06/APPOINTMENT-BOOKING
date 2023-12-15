
import Doctor from "../models/DoctorSchema.js";
import BookingSchema from "../models/BookingSchema.js";

export const updateDoctor = async(req,res) =>{
    const id = req.params.id
    try{    
    const updatedDoctor = await Doctor.findByIdAndUpdate(id,{$set:req.body},{new:true}).select("-password")
    res.status(200).json({
        success: true,
        message: "successfully updated",
        data:updatedDoctor
    })
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"failed to update"
        })
    }

}

export const deleteDoctor = async(req,res) =>{
    const id = req.params.id
    try{    
    const updatedDoctor = await Doctor.findByIdAndDelete(id, )
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

export const singleDoctor = async(req,res) =>{
    const id = req.params.id

    try{
        const singleDoctor = await Doctor.findById(id).populate("reviews").select("-password")
        res.status(200).json({
            success: true,
            message: "successfully found",
            data: singleDoctor
        })
    }
    catch(error){
        res.status(404).json({
            success:false,
            message:"Doctor not found"
        })
    }
}

export const allDoctor = async(req,res) =>{
    

    try{
            const {query} = req.query
            let allDoctor
            if(query){
                allDoctor = await Doctor.find({ isApproved:"approved",$or:[
                    {
                       name:{$regex:query,$options:"i"}
                    },
                  {
                    specialization:{$regex:query,$options:"i"}
                  }
                ]}).select("-password")
            }
            else{
                allDoctor = await Doctor.find({isApproved:'approved'}).select("-password")
        
            }
            res.status(200).json({
                success: true,
                message: "successfully found",
                data: allDoctor
            })
    }
    catch(error){
        res.status(404).json({
            success:false,
            message:"Doctors not found"
        })
    }
}

export const getDoctorProfile = async(req,res)=>{
    const doctorId = req.userId

    try{
        const doctor = await Doctor.findById(doctorId)

        if(!doctor){
            return res.status(404).json({status:false,message:"user not exist"})


        }
        const {password,...rest} = doctor._doc
        const appoinments = await BookingSchema.find({doctor:doctorId})

        res.status(200).json({success:true,message:"Profile info is getting",data:{...rest,appoinments}})

    }
    catch(err){
        res.status(500).json({success:false,message:"Something went wrong cannot get"});
    }
}
