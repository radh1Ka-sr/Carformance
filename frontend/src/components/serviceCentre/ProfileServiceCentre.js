import React, { useState } from 'react';
import ProfileTable from './ProfileTable';

const ProfileServiceCentre = () => {
  const serviceCentreLocalStorageData = JSON.parse(localStorage.getItem('serviceCentre'));
  const [serviceCentreData] = useState(serviceCentreLocalStorageData);



  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <div style={{ margin: '3rem', width: '32rem', height: '20rem' }}>
        <div className="card">
          <img
            src={serviceCentreData.imageAddress}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title" style={{ display: 'flex', justifyContent: 'center' }}>
              {serviceCentreData.serviceCentreName}
            </h5>
            <li className="list-group-item">Email : {serviceCentreData.email}</li>
            <li className="list-group-item">Owner : {serviceCentreData.name}</li>
            <li className="list-group-item">Address : {serviceCentreData.address}</li>
          </div>
        </div>
      </div>
      <div style={{ margin: '3rem', width: '30rem', height: '20rem' }}>
        <ProfileTable
          services={serviceCentreData.services}
          prices={serviceCentreData.prices}
          times={serviceCentreData.averageTimes}
      
        />
        
      </div>
    </div>
  );
};

export default ProfileServiceCentre;
