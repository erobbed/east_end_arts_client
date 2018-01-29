import React from "react";
import { Menu, Segment, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logOut } from "../../actions/authActions";
import { Route } from "react-router";
import ModalContainer from "../Modal";

class NavBar extends React.Component {
  handleLogout = () => {
    this.props.logOut();
  };

  handleClick = () => {
    this.props.mission();
  };

  render() {
    const logout = (
      <Button
        basic
        secondary
        color="black"
        id="log"
        onClick={this.handleLogout}
      >
        Log Out
      </Button>
    );
    let url =
      "http://ny-southampton.civicplus.com/1054/Southampton-Arts-and-Culture-Committee-S";

    return (
      <Segment className="nav">
        <Menu pointing secondary className="main-nav" size="tiny">
          <Menu.Item href={url} name="Town of Southampton" key="home" />
          <Menu.Item onClick={this.handleClick} name="Mission" key="mission" />
          <Menu.Item className="header">
            <h1 className="App-title">
              Southampton Arts and Culture Committee (SHACC)
            </h1>
          </Menu.Item>
          <Menu.Menu position="right" key="right">
            <Menu.Item>
              {this.props.loggedIn ? (
                logout
              ) : (
                <Route
                  path="/919ddbbc6483b8b243d0592f5432a2fd/login"
                  //md5 of shacc-approved
                  component={ModalContainer}
                />
              )}
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Segment>
    );
  }
}

function mapStateToProps(state) {
  return { loggedIn: state.auth.loggedIn, user: state.auth.user };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logOut }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
