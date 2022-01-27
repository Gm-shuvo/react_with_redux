import { buycake } from "../redux/index";
import { connect } from "react-redux";

const CakeContainer = (props) => {
  return (
    <div className="container">
      <h1>number of cakes- {props.numberOfCake}</h1>
      <button onClick={props.buycake}>Buy cake</button>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    numberOfCake: state.numberOfCake
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buycake: () => { dispatch(buycake())}
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (CakeContainer);
