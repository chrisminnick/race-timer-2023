import Background from './Background';
import Timer from './Timer';
import Contestant from './Contestant';
import { useState } from 'react';

function App() {
  const [time, setTime] = useState(0);
  const contestants = [
    'Ahmed Karman',
    'Andrew Cruz',
    'Andrew Pepper',
    'Andrew Weekes',
    'Calvin Chadima',
    'Dino  Alihodzic',
    'Duy Dao',
    'Erick Ruilova',
    'Gavin Palazzo',
    'Humberto Sanchez Heredia',
    'Hunter Vetterkind',
    'Jared Button',
    'Jing Li',
    'Joshua Fernandes',
    'Katherine Morton',
    'Lin Watson',
    'Prabin Jarka',
    'Victor Chen',
    'Zach Dubinsky',
    'Chris Penick',
    'Chris Minnick',
  ];
  return (
    <Background time={time}>
      <Timer time={time} setTime={setTime} />
      {contestants.map((contestant) => (
        <Contestant time={time} contestantName={contestant} />
      ))}
    </Background>
  );
}
export default App;
