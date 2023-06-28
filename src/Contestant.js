function Contestant(props) {
  const leftPos = Math.floor(Math.random() * 300 + props.time * 3);

  const characterStyle = {
    position: 'absolute',
    left: leftPos,
    top: props.ypos,
  };

  return <p style={characterStyle}>{props.contestantName}</p>;
}
export default Contestant;
