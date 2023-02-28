import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone'
import logo from './logo.svg';
import './App.css';

const cityList = ['Europe/Stockholm']

const Dropdown = 
React.memo (() =>
{return (
<div>
 <select>
   <option value="fruit">Fruit</option>
   <option value="vegetable">Vegetable</option>
   <option value="meat">Meat</option>
 </select>
</div>)}
);


const Clock = ({city, time}: {city: string, time: Date}) => {
  return <div className="clock">Current time: { moment(time.getTime()).tz(city).format()} in {city}</div>
};

function App() {
  let date = new Date()
  const [time, setTime] = useState(date);
  
  const Board = ({timezone} : {timezone: string}) => {
    if (moment.tz.names().includes(timezone)) {
      if(!cityList.includes(timezone)) {
        cityList.push(timezone)
      }
    };
    const clocks = cityList.map(city => <Clock key={city} city={city} time={time} />)
    return <>{clocks}</>
  }

  useEffect(() => {
    setTimeout(() => setTime(new Date()), 10000);
  }, [time]);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <section className='clock-area'>
          <Dropdown />
        <Board timezone={'Asia/Tokyo'}/>
        </section>
      </header>
    </div>
  );
}

export default App;
