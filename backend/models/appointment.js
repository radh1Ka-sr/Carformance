const mongoose = require('mongoose');
const { Schema } = mongoose;

const AppointmentSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    serviceCentreId: { type: mongoose.Schema.Types.ObjectId, ref: 'ServiceCentre', required: true },
    services: [String],
    totalPrice: Number,
    startTime: Date,
    endTime: Date,
    serviceCentreName : String,
    serviceCentreAddress : String,
    userName : String
  
});

const Appointment = mongoose.model("Appointment", AppointmentSchema);
module.exports = Appointment;