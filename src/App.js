import { useState, useEffect } from 'react';

import Background from './Background';
import Timer from './Timer';
import Contestant from './Contestant';

function App(props) {
  const [time, setTime] = useState(0);
  const [contestants, setContestants] = useState([
    'Ahmed Karman',
    'Andrew Cruz',
    'Andrew Pepper',
    'Andrew Weekes',
    'Calvin Chadima',
    // 'Dino Alihodzic',
    // 'Duy Dao',
    // 'Erick Ruilova',
    // 'Gavin Palazzo',
    // 'Humberto Sanchez Heredia',
    // 'Hunter Vetterkind',
    // 'Jared Button',
    // 'Jing Li',
    // 'Joshua Fernandes',
    // 'Katherine Morton',
    // 'Lin Watson',
    // 'Prabin Jarka',
    // 'Victor Chen',
    // 'Zach Dubinsky',
    // 'Chris Penick',
    // 'Chris Minnick',
  ]);

  useEffect(() => {
    setInterval(() => {
      setTime((t) => t + 1);
    }, 200);
  }, []);

  function generateContestantList() {
    let ypos = 60;
    const contestantsList = contestants.map((contestant) => {
      ypos = ypos + 100;
      return <Contestant ypos={ypos} time={time} contestantName={contestant} />;
    });
    return contestantsList;
  }
  return (
    <Background time={time}>
      <button>Start Timer</button>
      <Timer time={time} setTime={() => setTime({ time: time + 1 })} />
      {generateContestantList()}
    </Background>
  );
}

// componentDidMount() {
//   let clock =
// }

export default App;
