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
  // TODO
};

export default connect(mapStateToProps)(TagsSummary);
