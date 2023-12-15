
import UserSchema from '../models/UserSchema.js';
import DoctorSchema from '../models/DoctorSchema.js';
import Jwt   from 'jsonwebtoken';
import bcrypt from 'bcrypt'
export const register = async(req,res) =>{
    
        const {name,password,role,email,phone,gender,photo} =  req.body

        console.log(gender)
    try{
        let user = null;

      
            user = await UserSchema.findOne({email}) || await DoctorSchema.findOne({email})
            
        

        if(user){
            return res.status(400).json({message:'user name aldready taken'})
        }

        
        const salt =  await bcrypt.genSalt(10)
        const hashedpassword = await bcrypt.hash(password,salt)
        console.log('Before user creation');
        if(role === 'patient'){
            user = new UserSchema({
                name,
                password:hashedpassword,
                role,
                email,
                phone,
                gender,
                photo
            })
            console.log('After user creation' + user);
        }
        if(role === 'doctor'){
            user = new DoctorSchema({
                name,
                password:hashedpassword,
                role,
                email,
                phone,
                gender,
                photo
            })
            console.log('After user creation doctor' + user);
        }

        await user.save()
        res.status(200).json({success:true,message:"registered succefully"})
    }catch(error){
        console.log("this is error" + error)
        res.status(500).json({success:false,message:"internal server error"})

    }
}
export const login = async(req,res) =>{
    const {email} = req.body
    const generateToken = (user) => {
        return Jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY, {
            expiresIn: '15days'
        });
    };
    
    try{
    let user = null
    let patient = await UserSchema.findOne({email})
    let doctor = await DoctorSchema.findOne({email})

    if(patient){
        user = patient
    }else if(doctor){
        user = doctor
    }

    if(!user){
        return res.status(404).json({message: "user not found"})
    }

    const isPasswordMatch = await bcrypt.compare(req.body.password,user.password)

    if(!isPasswordMatch){
        return res.status(400).json({status: false, message:"Invalid credentials"})
    }

    const token = generateToken(user);

   
 
    
    const {password,appointments,role,...rest} = user._doc;
    res.status(200).json({ status: true, message: "Login Successful", token,
    data: {...rest},
    role,
 });

   

    }catch(error){
        console.log(error)
        res.status(500).json({message:"Login failed"})
    }
}