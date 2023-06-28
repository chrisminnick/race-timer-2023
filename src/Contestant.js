function Contestant(props) {
  const leftPos = props.time * 2;

  const characterStyle = {
    position: 'absolute',
    left: leftPos,
    top: props.ypos,
  };

  return <p style={characterStyle}>{props.contestantName}</p>;
}
export default Contestant;
