const express = require('express');
const router = express.Router();
//const { User, ServiceCentre, Appointment} = require("../models");
const { User, ServiceCentre, Appointment, DeletedAppointment } = require("../models");
const SECRET = "pratik"
const jwt = require('jsonwebtoken');
const { authenticateJwt } = require('../middleware/auth');
const bcrypt = require('bcrypt');

// Signup
router.post('/signup', async (req, res) => {
  const { name, email, password, serviceCentreName, imageAddress, services, prices, averageTimes, address, user } = req.body;
  const serviceCentre = await ServiceCentre.findOne({ email });
  if (serviceCentre) {
    res.status(403).json({ message: 'ServiceCentre already exists' });
  } else {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newServiceCentre = new ServiceCentre({ name, email, password: hashedPassword, serviceCentreName, imageAddress, services, prices, averageTimes, address, user });
    await newServiceCentre.save();
    const token = jwt.sign({ email, role: 'serviceCentre' }, SECRET, { expiresIn: '1h' });
    res.json({ message: 'ServiceCentre created successfully', token });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const serviceCentre = await ServiceCentre.findOne({ email });
  if (serviceCentre && await bcrypt.compare(password, serviceCentre.password)) {
    const token = jwt.sign({ serviceCentre: serviceCentre.email }, SECRET, { expiresIn: '1h' });
    res.json({ message: 'Logged in successfully', token, serviceCentre });
  } else {
    res.status(403).json({ message: 'Invalid email or password' });
  }
});

//Home page for serviceCentre
router.get('/', authenticateJwt, async (req, res) => {
  const serviceCentreEmail = req.user.serviceCentre;
  const token = req.headers.authorization.split(' ')[1];

  try {
    // Verify JWT token
    const decoded = jwt.verify(token, SECRET);

    // Find the serviceCentre by email
    const serviceCentre = await ServiceCentre.findOne({ email: serviceCentreEmail });
    if (!serviceCentre) {
      return res.status(404).json({ message: 'ServiceCentre not found' });
    }

    // Fetch appointments based on appointment IDs stored in the serviceCentre schema
    const appointments = await Appointment.find({
      _id: { $in: serviceCentre.appointments }
    });

    res.status(200).json({
      message: 'Success',
      data: appointments
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Delete a User
// router.delete('/:appointmentId', authenticateJwt, async (req, res) => {
//   const { appointmentId } = req.params;

//   try {
//     const appointment = await Appointment.findByIdAndDelete(appointmentId);

//     if (!appointment) {
//       return res.status(404).json({ message: 'Appointment not found' });
//     }

//     res.status(200).json({ message: 'Appointment deleted successfully' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });
// Delete an Appointment
router.delete('/:appointmentId', authenticateJwt, async (req, res) => {
  const { appointmentId } = req.params;

  try {
    const appointment = await Appointment.findById(appointmentId);

    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    // Save the appointment to DeletedAppointment schema
    const deletedAppointment = new DeletedAppointment({
      userId: appointment.userId,
      serviceCentreId: appointment.serviceCentreId,
      services: appointment.services,
      totalPrice: appointment.totalPrice,
      startTime: appointment.startTime,
      endTime: appointment.endTime,
      serviceCentreName: appointment.serviceCentreName,
      serviceCentreAddress: appointment.serviceCentreAddress,
      userName: appointment.userName
    });
    await deletedAppointment.save();

    // Delete the appointment from Appointment schema
    await Appointment.findByIdAndDelete(appointmentId);

    res.status(200).json({ message: 'Appointment deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// Fetch Deleted Appointments
router.get('/deleted-appointments', authenticateJwt, async (req, res) => {
  const serviceCentreEmail = req.user.serviceCentre;

  try {
    const serviceCentre = await ServiceCentre.findOne({ email: serviceCentreEmail });

    if (!serviceCentre) {
      return res.status(404).json({ message: 'ServiceCentre not found' });
    }

    const deletedAppointments = await DeletedAppointment.find({ serviceCentreId: serviceCentre._id });

    res.status(200).json({
      message: 'Success',
      data: deletedAppointments
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});




  module.exports = router;