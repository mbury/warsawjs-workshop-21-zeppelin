import React from "react";
import { Header, Comment, Form, Button, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { getFiltredComments, getSelectedPoint } from "../selectors";

const SidebarComments = ({ comments, point, deselectPoint }) => {
  return (
    <div>
      <Header as="h3">Komentarze: </Header>
      {point && (
        <Button
          basic
          labelPosition="right"
          color="green"
          icon
          size="mini"
          onClick={deselectPoint}
        >
          <Icon name="close" />
          Punkt: {`${point.x}x${point.y}`}
        </Button>
      )}
      <Comment.Group>
        {comments.length > 0 &&
          comments.map(({ author, content, id } = {}) => (
            <Comment key={id}>
              <Comment.Avatar
                as="a"
                src={`http://i.pravatar.cc/35?img=${id}`}
              />
              <Comment.Content>
                <Comment.Author>{author}</Comment.Author>
                <Comment.Text>
                  <p>{content}</p>
                </Comment.Text>
                <Comment.Actions>
                  <Comment.Action>odpowiedz</Comment.Action>
                </Comment.Actions>
              </Comment.Content>
            </Comment>
          ))}

        <Form reply>
          <Form.TextArea />
          <Button
            content="Dodaj komentarz"
            labelPosition="left"
            icon="edit"
            primary
          />
        </Form>
      </Comment.Group>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  // TODO
});

const mapStateToProps = (state, ownProps) => {
  getFiltredComments(state, ownProps);
  return {
    // TODO
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarComments);
