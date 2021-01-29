import React from 'react';
import './App.css';
import ContainerMenu from './components/Menu/ContainerMenu.js';
import ContainerHeader from './components/Header/ContainerHeader.js';
import SalesGraph from './components/Content/SalesGraph/SalesGraph';
import OrderSlider from './components/Content/OrderSlider/OrderSlider';
import RecentActivity from './components/Content/RecentActivity/RecentActivity';
import ContentFour from './components/Content/ContentFour/ContentFour';
import styled from 'styled-components'


// import Highcharts, { Point } from 'highcharts'
// import HighchartsReact from 'highcharts-react-official'

function App() {
  return (
    <div className="main-container">
      <ContainerMenu />
      <div class="main">
        <ContainerHeader />
        <div className="content-main">
          <SalesGraph />
          <OrderSlider />
          <RecentActivity />
          <ContentFour />
        </div>

      </div>



    </div >
  );
}

export default App;
