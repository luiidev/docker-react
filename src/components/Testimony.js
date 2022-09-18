import '../css/Testimony.css';

function Testimony(props) {
  return (
    <div className="testimony-container">
      <img 
        className="testimony-image"
        src="https://source.unsplash.com/random/250x250?sig=1"
        alt="Foto"
      />
      <div className="testimony-container-text">
        <p className="testimony-name">
          <b>{ props.name }</b> en { props.country }
        </p>
        <p className="testimony-job">
          { props.job } en <b>{ props.company }</b>
        </p>
        <p className="testimony-text">
          "{ props.testimony }"
        </p>
      </div>
    </div>
  );
}

export default Testimony;