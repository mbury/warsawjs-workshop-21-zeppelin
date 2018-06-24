import React from "react";
import { Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";

import { getNotSelectedtags } from "../selectors";

const Searchtags = ({ addTag, options }) => {
  return (
    <div>
      <Dropdown
        placeholder="Szukaj"
        fluid
        search
        selection
        multiple
        closeOnChange
        onChange={(e, { value }) => {
          addTag(value[0]);
        }}
        value={[]}
        options={options}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  // TODO
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  // TODO
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Searchtags);
