function Timer(props) {
  function incrementTime() {
    props.setTime(props.time + 1);
  }
  return (
    <p
      style={{
        textAlign: 'center',
        borderRadius: '10px',
        border: '1px solid black',
        fontSize: '48px',
        padding: '10px',
        margin: '20px',
      }}
    >
      {props.time} seconds <button onClick={incrementTime}>Advance Time</button>
    </p>
  );
}
export default Timer;
