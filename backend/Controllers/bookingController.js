import BookingSchema from "../models/BookingSchema.js";

export const createBooking = async(req,res) =>{
    try{
    const { doctorId, userId, ticketPrice, appointmentDate } = req.body;
    const newBooking = new BookingSchema({
        doctor: doctorId,
        user: userId,
        ticketPrice,
        appointmentDate,
      });

      await newBooking.save();

      return res.status(201).json({ message: 'Booking successful', booking: newBooking });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  
}

export const getuserBooking = async (req, res) => {
    try {
    //   const userId = '6571cf56d88a1a36c003888b'
      
      const userId = req.query.userId;
      const userBookings = await BookingSchema.find({ user: userId }).populate("doctor");
  
      return res.status(200).json({ bookings: userBookings });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }  
  };
  

  export const getdoctorBooking = async (req,res) => {
    try{
    const userId = req.query.userId;
    const userBookings = await BookingSchema.find({ user: userId }).populate("user")
  
      return res.status(200).json({ bookings: userBookings });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }  
  }
