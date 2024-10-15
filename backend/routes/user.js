const express = require('express');
const router = express.Router();
const { User, ServiceCentre, Appointment} = require("../models");
const SECRET = "pratik"
const jwt = require('jsonwebtoken');
const { authenticateJwt } = require('../middleware/auth');
const bcrypt = require('bcrypt');
// Signup
router.post('/signup', async (req, res) => {
  const { name, email, password, phone, gender } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    res.status(403).json({ message: 'User already exists' });
  } else {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword, phone, gender });
    await newUser.save();
    const token = jwt.sign({ email, role: 'user' }, SECRET, { expiresIn: '1h' });
    res.json({ message: 'User created successfully', token });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ user: user.email }, SECRET, { expiresIn: '1h' });
    res.json({ message: 'Logged in successfully', token, user });
  } else {
    res.status(403).json({ message: 'Invalid email or password' });
  }
});

  // Get user appointments
router.get('/myAppointments', authenticateJwt, async (req, res) => {
  try {
    const email = req.user.user;

    // Find the user by email and populate the appointments
    const user = await User.findOne({ email }).populate('appointments');

    // Check if user exists
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Return the populated appointments
    res.json({ myAppointments: user.appointments });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

 //Get all serviceCentres
 router.get('/', authenticateJwt, async (req, res) => {
  const serviceCentre = await ServiceCentre.find({});
  res.json({ serviceCentre });
});

  

  //Get serviceCentre by id
  router.get('/:serviceCentreId' , authenticateJwt , async (req,res)=>{
    try {
        let data = await ServiceCentre.findById(req.params.serviceCentreId);
        res.json({data : data});
    } catch (error) {
        res.json({message : error.message})
    }
})

// Post appointment
router.post('/:serviceCentreId/appointment', authenticateJwt, async (req, res) => {
  const { services } = req.body;
  const email = req.user.user;
  const serviceCentreId = req.params.serviceCentreId;
  const user = await User.findOne({ email });
  // console.log(user);

  try {
    const serviceCentre = await ServiceCentre.findById(serviceCentreId);

    
    if (!serviceCentre) {
      return res.status(404).json({ message: 'ServiceCentre not found' });
    }

    let totalPrice = 0;
    let totalTime = 0;

    const servicePriceMap = new Map();
    const serviceTimeMap = new Map();

    serviceCentre.services.forEach((service, index) => {
      servicePriceMap.set(service, serviceCentre.prices[index]);
      serviceTimeMap.set(service, serviceCentre.averageTimes[index]);
    });

    services.forEach(service => {
      const price = servicePriceMap.get(service);
      const time = serviceTimeMap.get(service);
      totalPrice += price;
      totalTime += time;
    });
    

    
    // Calculation of time
    let currTime = new Date();
    let startTime;
    if (currTime > new Date(serviceCentre.endTime)) {
      startTime = currTime;
    } else {
      startTime = new Date(serviceCentre.endTime);
    }

    // Convert totalTime (in minutes) to milliseconds and add to startTime
    let endTime = new Date(startTime.getTime() + totalTime * 60000);

    // Update serviceCentre's endTime to be endTime of this appointment
    serviceCentre.endTime = endTime;

    let formattedStartTime = startTime.toString();
    let formattedEndTime = endTime.toString();



    const newAppointment = new Appointment({
      userId: user._id,
      serviceCentreId: serviceCentreId,
      services : services,
      totalPrice : totalPrice,
      startTime : formattedStartTime,
      endTime : formattedEndTime,
      serviceCentreName : serviceCentre.serviceCentreName,
      serviceCentreAddress : serviceCentre.address,
      userName : user.name

    });

    user.services = [];

    await newAppointment.save();

    user.appointments.push(newAppointment._id);

    services.forEach(s => {
      user.services.push(s);
    })
    await user.save();

    serviceCentre.appointments.push(newAppointment._id);
    await serviceCentre.save();
    
      serviceCentre.user.push(user._id);
      await serviceCentre.save();

    // Format the dates as strings


    res.json({ 
      message: 'Appointment booked successfully',
      totalPrice,
      startTime: formattedStartTime,
      endTime: formattedEndTime,
      appointmentId: newAppointment._id
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// //Get MyAppointments
// router.get('/', authenticateJwt, async (req, res) => {
//   const serviceCentre = await ServiceCentre.find({});
//   res.json({ serviceCentre });
// });


// Get appointments for a specific user
// router.get('/appoint',authenticateJwt, async (req, res) => {
//   const email = req.user.user;
//   const user = await User.findOne({ email });
//   try {
//     // const appointments = await Appointment.find({ });
//     res.json(user);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });






  module.exports = router;