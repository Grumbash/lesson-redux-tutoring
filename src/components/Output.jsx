import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getShow } from "../actions/shows";

function Output(props) {
  useEffect(() => {
    props.getShow(props.output);
  }, [props.output]);
  return <div>{props.output}</div>;
}

const mapStateToProps = (state) => ({
  output: state.output,
});

const mapDispatchToPropsNonObject = (dispatch) => {
  return {
    getShow: (id) => dispatch(getShow(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToPropsNonObject)(Output);
