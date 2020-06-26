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
        colors: ['#546E7A', '#E91E63'],
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
      },
      {
        name: 'series-2',
        data: [40, 50, 45, 60, 59, 70, 80, 101, 135]
      },
      {
        name: 'series-3',
        data: [20, 30, 35, 50, 49, 60, 80, 101, 135],
        color: '#111'
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
