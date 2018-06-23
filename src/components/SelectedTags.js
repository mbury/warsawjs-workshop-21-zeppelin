import React from "react";
import { List, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { getSelectedtags } from "../selectors";

const SelectedTags = ({ tags, onDelete }) => {
  return (
    <List animated verticalAlign="middle" divided relaxed={"very"}>
      {tags.map(item => (
        <List.Item key={item}>
          <List.Content floated="right">
            <Icon link name="delete" onClick={() => onDelete(item)} />
          </List.Content>
          <List.Content>{item}</List.Content>
        </List.Item>
      ))}
    </List>
  );
};

SelectedTags.defaultProps = {
  tags: []
};

const mapStateToProps = (state, ownProps) => ({
  tags: getSelectedtags(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDelete: name => dispatch({ type: "DELETE_INGREDIENT", payload: name })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectedTags);
