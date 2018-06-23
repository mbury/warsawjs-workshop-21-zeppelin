import React from "react";
import find from "lodash/find";
import { Icon, Header, Table, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { reduce, times } from "lodash";
import { getProjects, getShops, getSimilars } from "../selectors";

class ProjectSimilars extends React.Component {
  componentDidMount() {
    const { getSimilars, projecttags } = this.props;
    getSimilars(projecttags);
  }
  componentWillUnmount() {
    const { closeBasket } = this.props;
    closeBasket();
  }
  getShopCount(id) {
    const { count } = this.props;
    return reduce(
      count[id],
      (acc, value, key) => {
        return acc + value;
      },
      0
    );
  }
  render() {
    const { shops, count, projecttags, getSimilars } = this.props;
    return (
      <div>
        <Header as="h2">Liczba podobnych aplikacji: </Header>
        <Table basic celled structured>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell rowSpan="2">Sklep</Table.HeaderCell>
              <Table.HeaderCell textAlign="center" colSpan="3">
                Stopnie podobiństwa
              </Table.HeaderCell>
              <Table.HeaderCell rowSpan="2">Łącznie</Table.HeaderCell>
            </Table.Row>

            <Table.Row>
              <Table.HeaderCell>>90% </Table.HeaderCell>
              <Table.HeaderCell>>75% </Table.HeaderCell>
              <Table.HeaderCell>>50% </Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {shops.map(shop => (
              <Table.Row key={shop.id}>
                <Table.Cell>
                  <strong>{shop.name}</strong>
                </Table.Cell>
                {count[shop.id]
                  ? count[shop.id].map(i => (
                      <Table.Cell key={i}>
                        <span>{i}</span>
                      </Table.Cell>
                    ))
                  : times(3).map(i => (
                      <Table.Cell key={i}>
                        <Icon loading name="spinner" />
                      </Table.Cell>
                    ))}
                <Table.Cell>{this.getShopCount(shop.id)}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>

          <Table.Footer fullWidth>
            <Table.Row>
              <Table.HeaderCell colSpan="100%">
                <Button
                  onClick={() => getSimilars(projecttags)}
                  icon
                  labelPosition="left"
                  primary
                  size="small"
                >
                  <Icon name="retweet" /> Sprawdź ponownie
                </Button>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </div>
    );
  }
}

ProjectSimilars.defaultProps = {};

const getProjecttags = (state, ownProps) => {
  const projects = getProjects(state);
  return find(projects, project => project.id === parseInt(ownProps.id, 10))
    .tags;
};

const mapStateToProps = (state, ownProps) => ({
  projecttags: getProjecttags(state, ownProps),
  shops: getShops(state),
  count: getSimilars(state)
});

const mapDispatchToProps = dispatch => ({
  getSimilars: tags =>
    dispatch({ type: "FIND_PROJECT_SIMILARS", payload: tags }),
  closeBasket: tags => dispatch({ type: "CLOSE_PROJECT" })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectSimilars);
