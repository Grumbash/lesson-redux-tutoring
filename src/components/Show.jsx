import React from "react";
import { connect } from "react-redux";

function Show(props) {
  const { show } = props;

  if (!show) {
    return (
      <div>
        <p style={{ color: "red" }}>this show hasn't been found</p>
      </div>
    );
  }
  const { image, name, url } = show;
  return (
    <div>
      <h4>{name}</h4>
      <img src={image.medium} alt={name} />
      <a href={url} style={{ display: "block" }}>
        {name}
      </a>
    </div>
  );
}

const mapStateToProps = (state) => ({
  show: state.show.currentShow,
});

export default connect(mapStateToProps)(Show);
