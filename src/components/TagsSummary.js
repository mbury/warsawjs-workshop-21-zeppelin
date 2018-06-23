import React from "react";
import { connect } from "react-redux";

import { getMatchtags } from "../selectors";

const TagsSummary = ({ matchtags, tags = [] }) => {
  return (
    <span>
      pasujących tagów: {matchtags} z {tags.length}
    </span>
  );
};

const mapStateToProps = (state, ownProps) => {
  const matchtags = getMatchtags(state);
  return {
    matchtags: matchtags[ownProps.id] || 0
  };
};

export default connect(mapStateToProps)(TagsSummary);
