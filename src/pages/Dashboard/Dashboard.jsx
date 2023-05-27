import React, { useContext } from 'react';
import styles from './Dashboard.module.scss';
import { Button, Form, Input } from 'antd';
import discountStar from '../../assets/stars/discountStar.svg';
import interfacePurpleSmall from '../../assets/stars/interfacePurpleSmall.svg';
import ukraineSign from '../../assets/images/ukraineSign.png';
import interfaceLimeSmall from '../../assets/stars/interfaceLimeSmall.svg';
import DashboardContext from '../../context/DashboardContext';
import { useNavigate } from 'react-router-dom';
import AppContext from '../../context/AppContext';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboard__container}></div>
    </div>
  );
};

export default Dashboard;
