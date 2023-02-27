import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone'
import logo from './logo.svg';
import './App.css';

const cityList = ['Europe/Stockholm','America/Argentina/Rio_Gallegos','Asia/Macao']

function App() {
  let date = new Date()
  const [time, setTime] = useState(date);
 
  const Clock = ({city}: {city: string}) => {
    return <div className="clock">Current time: { moment(time.getTime()).tz(city).format()} in {city}</div>
  };
  
  const Board = () => {
    const clocks = cityList.map(city => <Clock city={city} />)
    console.log(clocks[0].props , clocks)
    return <>{clocks}</>
  }
  
  useEffect(() => {
    setTimeout(() => setTime(new Date()), 1000);
  }, [time]);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <section className='clock-area'>
        <Board />
        </section>
      </header>
    </div>
  );
}

export default App;
