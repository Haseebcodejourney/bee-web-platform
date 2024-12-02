import React, { useState, useEffect } from 'react';
import '../style/box/style.css';
import data from '../api/beeData.json';

export default function Box() {
  const [beeStatus, setBeeStatus] = useState([]);
  const [hiveStatus, setHiveStatus] = useState([]);
  const [diseaseDetection, setDiseaseDetection] = useState([]);
  const [hiveWeight, setHiveWeight] = useState([]);

  // Simulate fetching data from an API
  useEffect(() => {
    // Fetch and set different categories of data from JSON
    setBeeStatus(data.beeStatus);
    setHiveStatus(data.hiveStatus);
    setDiseaseDetection(data.diseaseDetection);
    setHiveWeight(data.hiveWeight);
  }, []);

  return (
    <>
      <div className="box-wrapper">
        {/* Bee Status Box */}
        <div className="box">
          <div className="box-wrapper-top">
            <strong>Bee Status</strong>
            <figure>
              <img src='https://cdn-icons-png.flaticon.com/512/6958/6958528.png' alt='' />
            </figure>
          </div>
          <ul>
            {beeStatus.map((item, index) => (
              <li key={index}>
                <span>{item.status}</span>
                <span>{item.isThreatened}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Hive Status Box */}
        <div className="box">
          <div className="box-wrapper-top">
            <strong>Hive Status</strong>
            <figure>
              <img src='https://media.istockphoto.com/id/1053125290/vector/honeycomb-bee-icon-on-white-background-honeycomb-icon-for-your-web-site-design-logo-app-ui.jpg?s=612x612&w=0&k=20&c=n2htoITKNLJI3HMC_bp6Ku8BpHq3AYV-C9MEXScMNmc=' alt='' />
            </figure>
          </div>
          <ul>
            {hiveStatus.map((item, index) => (
              <li key={index}>
                <span>{item.status}</span>
                <span>{item.details}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Disease Detection Box */}
        <div className="box">
          <div className="box-wrapper-top">
            <strong>Dis. Detection</strong>
            <figure>
              <img src='https://cdn-icons-png.flaticon.com/512/1196/1196775.png' alt=''/>
            </figure>
          </div>
          <ul>
            {diseaseDetection.map((item, index) => (
              <li key={index}>
                <span>{item.status}</span>
                <span>{item.details}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Hive Weight Box */}
        <div className="box">
          <div className="box-wrapper-top">
            <strong>Hive Weight</strong>
            <figure>
              <img src='https://static.vecteezy.com/system/resources/previews/018/765/604/non_2x/scale-icon-in-flat-style-weight-balance-illustration-on-isolated-background-equilibrium-comparison-sign-business-concept-vector.jpg' alt=''/>
            </figure>
          </div>
          <ul>
            {hiveWeight.map((item, index) => (
              <li key={index}>
                <span>{item.status}</span>
                <span>{item.details}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
