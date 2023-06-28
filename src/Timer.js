function Timer(props) {
  function incrementTime() {
    props.setTime(props.time + 1);
  }
  return (
    <p
      style={{
        textAlign: 'center',
        borderRadius: '10px',
        border: '1px solid white',
        fontSize: '48px',
        padding: '10px',
        margin: '20px',
        color: 'white',
        zIndex: '2',
        position: 'absolute',
        top: '10px',
        width: '500px',
      }}
    >
      {props.time} seconds
    </p>
  );
}
export default Timer;
