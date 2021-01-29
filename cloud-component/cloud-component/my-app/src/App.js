import React from 'react';
import './App.css';
import datas from './data.js'
import ProgressBar from './progressBar.js'

function App() {
  const graphValues = datas.map(data => {
    return (
      <li className="listContainer" key={data.id}>
        <div className="row">
          <div className="name">{data.name} </div>
          <div className="value">{data.value}% </div>
        </div>
        <ProgressBar>{data.value}</ProgressBar>
      </li>
    )
  })

  return (
    <div className="main">
      <div className="heading">IAM Access Key Age</div>
      <ul>
        {graphValues}
      </ul>
    </div>
  );
}

export default App;
