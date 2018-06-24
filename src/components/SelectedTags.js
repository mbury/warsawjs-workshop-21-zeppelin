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
  // TODO
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  // TODO
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectedTags);
