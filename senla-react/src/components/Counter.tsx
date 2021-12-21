import { connect } from "react-redux";
import * as foo from "../store/actions/counterActions";

const Counter = ({
  counter,
  inc,
  dec,
}: {
  counter: number;
  inc: () => void;
  dec: () => void;
}) => {
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={inc}>INC</button>
      <button onClick={dec}>DEC</button>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    counter: state,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    inc: () => dispatch(foo.inc()),
    dec: () => dispatch(foo.dec()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
