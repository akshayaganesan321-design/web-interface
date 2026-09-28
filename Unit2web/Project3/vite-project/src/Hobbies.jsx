import './hobbies.css';   
function Hobbies(props) {
  return (
    <div className="card">
      <img src={props.image} alt="hobbies" className="img" />
      <h2>Hobbies:{props.hobbies}</h2>
      <p>description:{props.des}
      </p>
    </div>
  );
}

export default Hobbies;