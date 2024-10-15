import React from 'react';
import { Link } from "react-router-dom";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  });
  const formattedTime = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
  });
  return `${formattedDate}\n${formattedTime}`;
};

const AppointmentTable = ({ appointments }) => {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">
                    <img
                      src="https://t3.ftcdn.net/jpg/05/24/30/20/360_F_524302085_lZ82Bsfc7OECPdtVv0isnvda88BMHIJB.jpg"
                      alt="Logo"
                      style={{ marginTop: '1.5rem', width: '40px', height: '40px' }}
                    />
                  </th>
                  <th scope="col">Service Center Name</th>
                  <th scope="col">Address</th>
                  <th scope="col">Events</th>
                  <th scope="col" className="header-break">Service <br /> Start Time</th>
                  <th scope="col" className="header-break">Service <br /> End Time</th>
                  <th scope="col">Total Price (Rs)</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment, index) => (
                  <tr key={index}>
                    <th scope="row"><li style={{ marginLeft: '0.8rem' }}></li></th>
                    <td><Link to={`/userAddAppointment/${appointment.serviceCentreId}`}>{appointment.serviceCentreName}</Link></td>
                    <td>{appointment.serviceCentreAddress}</td>
                    <td>{appointment.services.join(', ')}</td>
                    <td style={{ whiteSpace: 'pre-wrap' }}>{formatDate(appointment.startTime)}</td>
                    <td style={{ whiteSpace: 'pre-wrap' }}>{formatDate(appointment.endTime)}</td>
                    <td>{appointment.totalPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentTable;
