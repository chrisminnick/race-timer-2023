import road from './images/parallax-road15fps.gif';

function Background(props) {
  return (
    <>
      <img style={{ width: '100%' }} src={road} />
      {props.children}
    </>
  );
}
export default Background;
