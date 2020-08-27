import React, { useState } from "react";
import { connect } from "react-redux";
import { addNumber, minusNumber } from "../actions/counts";
import useStyles from "./style";

function Calculator(props) {
  const propsStyles = { backgroundColor: "black", color: "white" };
  const [value, setValue] = useState(0);
  const classes = useStyles(propsStyles);

  const handleClick = (actionName) => (e) => {
    props[actionName](value);
  };

  const handleChange = (e) => {
    setValue(+e.target.value);
  };

  return (
    <div className={classes.flex}>
      <p>Calculator</p>
      <input value={value} onChange={handleChange} type="number" />
      <button onClick={handleClick("add")}>Add</button>
      <button onClick={handleClick("minus")}>Minus</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: (number) => dispatch(addNumber(number)),
    minus: (number) => dispatch(minusNumber(number)),
  };
};

export default connect(null, mapDispatchToProps)(Calculator);
