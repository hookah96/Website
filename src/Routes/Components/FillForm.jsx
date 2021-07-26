import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './Home/Menu';
import Central from './FillForm/Central';

const FillForm = () => {
  return (
    <Router>
      <Menu />
      <Central />
    </Router>
  );
};

export default FillForm;
