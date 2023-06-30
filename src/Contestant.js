import bird from './images/ZHug.gif';

function Contestant(props) {
  const leftPos = Math.floor(Math.random() * 150 + props.time * 3);

  const characterStyle = {
    position: 'absolute',
    left: leftPos,
    top: props.ypos,
  };

  return (
    <p style={characterStyle}>
      {props.contestantName}
      <img src={bird} />
    </p>
  );
}
export default Contestant;
