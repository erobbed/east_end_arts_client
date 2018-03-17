import React from "react";
import { Menu, Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logOut } from "../../../actions/authActions";
import { Route } from "react-router";
import Logout from "./Logout";
import ModalContainer from "./Modal";

class NavBar extends React.Component {
  handleLogout = () => {
    this.props.logOut();
  };

  handleMission = () => {
    this.props.mission();
  };

  handleAbout = () => {
    this.props.about();
  };

  render() {
    let url =
      "http://ny-southampton.civicplus.com/1054/Southampton-Arts-and-Culture-Committee-S";

    return (
      <Segment className="nav">
        <Menu pointing secondary className="main-nav" size="tiny">
          <Menu.Item href={url} key="home">
            Town of Southampton
          </Menu.Item>
          <Menu.Item
            onClick={this.handleMission}
            name="Mission"
            key="mission"
          />
          <Menu.Item className="header">
            <h1 className="App-title">
              Southampton Arts and Culture Committee (SHACC)
            </h1>
          </Menu.Item>
          <Menu.Menu position="right" key="right">
            <Menu.Item
              onClick={this.handleAbout}
              name="About"
              id="about"
              key="about"
            />
            <Menu.Item id="log">
              {this.props.loggedIn ? (
                <Route
                  path="/919ddbbc6483b8b243d0592f5432a2fd/login"
                  //md5 of shacc-approved
                  render={() => <Logout logout={this.handleLogout} />}
                />
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
