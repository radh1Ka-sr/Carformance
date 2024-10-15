import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ServiceTable from './ServiceTable';
import { useToast } from '@chakra-ui/react';

const AddAppointment = () => {
  const navigate = useNavigate();
  const { serviceCentreId } = useParams();
  const [serviceCentreData, setServiceCentreData] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [error, setError] = useState(null);
  const [image, setImage] = useState('');
  const [appointmentStartTime, setAppointmentStartTime] = useState('');
  const [appointmentEndTime, setAppointmentEndTime] = useState('');

  const toast = useToast();

  const fetchServiceCentreData = async () => {
    try {
      const token = localStorage.getItem('auth').replace(/(^"|"$)/g, '');
      const response = await axios.get(`http://localhost:3000/user/${serviceCentreId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setServiceCentreData(response.data.data);
      setImage(response.data.data.imageAddress);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchServiceCentreData();
  }, [serviceCentreId]);

  const handleServiceChange = (selected, totalPrice) => {
    setSelectedServices(selected);
    setTotalPrice(totalPrice);
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem('auth').replace(/(^"|"$)/g, '');
      const user = JSON.parse(localStorage.getItem('user')); 
      const response = await axios.post(
        `http://localhost:3000/user/${serviceCentreId}/appointment`,
        { services: selectedServices },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAppointmentStartTime(response.data.startTime.substring(0, 25));
      setAppointmentEndTime(response.data.endTime.substring(0, 25));

      toast({
        title: "Appointment Done",
        description: `Your selected services are ${selectedServices} and Total Price is ₹ ${totalPrice}.`,
        status: "success",
        duration: 6000,
        isClosable: true,
      });
      navigate('/userMyAppointment');
    } catch (err) {
      console.error(err);
    }
  };

  if (error) {
    return <div>Error fetching data.</div>;
  }

  if (!serviceCentreData) {
    return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div className="spinner-border" role="status">
          <span>Loading...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 mb-4">
          <div className="card">
            <img
              src={image}
              className="card-img-top"
              alt="ServiceCentre"
            />
            <div className="card-body">
              <h5 className="card-title text-center">{serviceCentreData.serviceCentreName}</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Email: {serviceCentreData.email}</li>
                <li className="list-group-item">Owner: {serviceCentreData.name}</li>
                <li className="list-group-item">Address: {serviceCentreData.address}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 mb-4">
          <ServiceTable
            services={serviceCentreData.services}
            prices={serviceCentreData.prices}
            times={serviceCentreData.averageTimes}
            onServiceChange={handleServiceChange}
          />
          <div className="d-flex justify-content-end mt-3">
            <button type="button" className="btn btn-primary" onClick={handleSubmit}>
              Book Appointment
            </button>
          </div>
          <div className="mt-3">
            <h4>Total Price: ₹ {totalPrice}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAppointment;
