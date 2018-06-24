import React from "react";
import { connect } from "react-redux";
import { Image, Segment, Button, Icon, Header } from "semantic-ui-react";
import { getProjectPoints, getSelectedPoint, getProject } from "../selectors";

const ImageCommnets = ({ points, selectPoint, point, title }) => {
  return (
    <Segment basic vertical>
      <Header as="h1">{title}</Header>
      <div
        style={{
          marginLeft: "50%",
          marginTop: 32,
          position: "relative",
          display: "inline-block",
          transform: "translateX(-50%)"
        }}
      >
        <Image src="http://via.placeholder.com/175x250" size="big" />
        {points.map(({ x, y }) => (
          <Button
            key={`${x}-${y}`}
            icon
            circular
            onClick={() => selectPoint({ x, y })}
            color={
              point && `${x}-${y}` === `${point.x}-${point.y}` ? "green" : "red"
            }
            style={{
              position: "absolute",
              transform: "translate(-20px, -20px)",
              top: y,
              left: x
            }}
          >
            <Icon name="comment" />
          </Button>
        ))}
      </div>
    </Segment>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  // TODO
});

const mapStateToProps = (state, ownProps) => ({
  // TODO
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageCommnets);
