import React from 'react';

import Background from './Background';
import Timer from './Timer';
import Contestant from './Contestant';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      contestants: [
        'Ahmed Karman',
        'Andrew Cruz',
        'Andrew Pepper',
        'Andrew Weekes',
        'Calvin Chadima',
        'Dino Alihodzic',
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
      ],
    };
    this.setTime = this.setTime.bind(this);
  }

  componentDidMount() {
    let clock = setInterval(() => {
      this.setTime(this.state.time + 1);
    }, 100);
  }

  setTime(newTime) {
    this.setState({ time: newTime });
  }
  generateContestantList() {
    let ypos = 60;
    const contestantsList = this.state.contestants.map((contestant) => {
      ypos = ypos + 30;
      return (
        <Contestant
          ypos={ypos}
          time={this.state.time}
          contestantName={contestant}
        />
      );
    });
    return contestantsList;
  }
  render() {
    return (
      <Background time={this.state.time}>
        <Timer time={this.state.time} setTime={this.setTime} />
        {this.generateContestantList()}
      </Background>
    );
  }
}
export default App;
