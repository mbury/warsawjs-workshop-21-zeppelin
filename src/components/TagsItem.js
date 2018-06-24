import React from "react";
import { Label, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { getSelectedtags } from "../selectors";

const tagsItem = ({ name, isSelected, selectIngredient }) => (
  <Label
    color={isSelected ? "blue" : undefined}
    onClick={() => selectIngredient(name)}
    as="a"
  >
    {isSelected && <Icon name="checkmark" />}
    #{name}
  </Label>
);

const mapStateToProps = (state, ownProps) => ({
  // TODO
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  // TODO
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(tagsItem);
