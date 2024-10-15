// models/deletedAppointment.js

const mongoose = require('mongoose');
const { Schema } = mongoose;

const DeletedAppointmentSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  serviceCentreId: { type: mongoose.Schema.Types.ObjectId, ref: 'ServiceCentre', required: true },
  services: [String],
  totalPrice: Number,
  startTime: Date,
  endTime: Date,
  serviceCentreName: String,
  serviceCentreAddress: String,
  userName: String,
  deletedAt: { type: Date, default: Date.now } // Timestamp when the appointment was deleted
});

const DeletedAppointment = mongoose.model("DeletedAppointment", DeletedAppointmentSchema);
module.exports = DeletedAppointment;
