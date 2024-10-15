// models/index.js

const User = require("./user");
const ServiceCentre = require("./serviceCentre");
const Appointment = require("./appointment");
const DeletedAppointment = require("./deletedAppointment");

module.exports = { User, ServiceCentre, Appointment, DeletedAppointment };
