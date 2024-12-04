import React, { useState, useEffect } from 'react';
import '../style/box/style.css';
import data from '../api/beeData.json';
import {Container, Boxs, TopSegment, Strong, Figure, Image, List, ListItems, Paper} from '../style/box/style';

export default function Box() {
  const [beeStatus, setBeeStatus] = useState([]);
  const [hiveStatus, setHiveStatus] = useState([]);
  const [diseaseDetection, setDiseaseDetection] = useState([]);
  const [hiveWeight, setHiveWeight] = useState([]);

  // SimListate fetching data from an API
  useEffect(() => {
    // Fetch and set different categories of data from JSON
    setBeeStatus(data.beeStatus);
    setHiveStatus(data.hiveStatus);
    setDiseaseDetection(data.diseaseDetection);
    setHiveWeight(data.hiveWeight);
  }, []);

  return (
    <>
      <Container className="box-wrapper">
        {/* Bee Status Box */}
        <Boxs>
          <TopSegment>
            <Strong>Bee Status</Strong>
            <Figure>
              <Image src='https://cdn-icons-png.flaticon.com/512/6958/6958528.png' alt='' />
            </Figure>
          </TopSegment>
          <List>
            {beeStatus.map((item, index) => (
              <ListItems key={index}>
                <Paper>{item.status}</Paper>
                <Paper>{item.isThreatened}</Paper>
              </ListItems>
            ))}
          </List>
        </Boxs>

        {/* Hive Status Box */}
        <Boxs>
          <TopSegment>
            <strong>Hive Status</strong>
            <Figure>
              <Image src='https://media.istockphoto.com/id/1053125290/vector/honeycomb-bee-icon-on-white-background-honeycomb-icon-for-your-web-site-design-logo-app-ui.jpg?s=612x612&w=0&k=20&c=n2htoITKNLJI3HMC_bp6Ku8BpHq3AYV-C9MEXScMNmc=' alt='' />
            </Figure>
          </TopSegment>
          <List>
            {hiveStatus.map((item, index) => (
              <ListItems key={index}>
                <Paper>{item.status}</Paper>
                <Paper>{item.details}</Paper>
              </ListItems>
            ))}
          </List>
        </Boxs>

        {/* Disease Detection Box */}
        <Boxs>
          <TopSegment>
            <Strong>Dis. Detection</Strong>
            <Figure>
              <Image src='https://cdn-icons-png.flaticon.com/512/1196/1196775.png' alt=''/>
            </Figure>
          </TopSegment>
          <List>
            {diseaseDetection.map((item, index) => (
              <ListItems key={index}>
                <Paper>{item.status}</Paper>
                <Paper>{item.details}</Paper>
              </ListItems>
            ))}
          </List>
        </Boxs>

        {/* Hive Weight Box */}
        <Boxs>
          <TopSegment>
            <Strong>Hive Weight</Strong>
            <Figure>
              <Image src='https://static.vecteezy.com/system/resources/previews/018/765/604/non_2x/scale-icon-in-flat-style-weight-balance-illustration-on-isolated-background-equiListItemsbrium-comparison-sign-business-concept-vector.jpg' alt=''/>
            </Figure>
          </TopSegment>
          <List>
            {hiveWeight.map((item, index) => (
              <ListItems key={index}>
                <Paper>{item.status}</Paper>
                <Paper>{item.details}</Paper>
              </ListItems>
            ))}
          </List>
        </Boxs>
      </Container>
    </>
  );
}
