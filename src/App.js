import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: 'apexchart-example',
          type: 'line',
          
        },
        // labels: ['one', 'two'],
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        },
        legend: {
          position: 'top'
        },
        // colors: ["#FF1654", "#247BA0"],
        // fill: {
        //   type: 'gradient',
        //   colors: ["#ff0000", "#22ff00", "#1100ff"]
        // }
        
      },

      series: [{
        name: 'series-1',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 12],
        color: '#ff0000'
      },
      {
        name: 'series-2',
        data: [40, 50, 45, 60, 59, 70, 80, 101, 135],
        color: '#22ff00'
      },
      {
        name: 'series-3',
        data: [20, 30, 25, 40, 39, 50, 60, 81, 115],
        color: '#1100ff'
      }]
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <Chart options={this.state.options} series={this.state.series} width={500} height={320} />
	    E <code>src/App.js</code> and save to .
	    </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
	    </a>
        </header>
      </div>
    );
  }
}

export default App;
