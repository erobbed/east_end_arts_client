import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { currentUser } from "./actions/authActions";
import MyCalendar from "./components/Calendar";
import NavBar from "./components/assets/NavBar";
import Mission from "./components/assets/Mission";
import GroupContainer from "./components/GroupContainer";
import "./App.css";
import "semantic-ui-css/semantic.min.css";

class App extends Component {
  state = {
    mission: false
  };

  componentDidMount() {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      return this.props.currentUser(jwt);
    }
  }

  handleMission = () => {
    this.setState({
      mission: !this.state.mission
    });
  };

  render() {
    let myEventsList = this.props.selectedGroup
      ? this.props.events.filter(
          event => event.group_id === this.props.selectedGroup.id
        )
      : this.props.events.filter(event => event.public);

    let left = this.props.loggedIn ? { width: "15%" } : { width: "0px" };
    let right = this.props.loggedIn
      ? { width: "85%" }
      : { width: "100%", margin: "0 auto" };
    let mission = this.state.mission
      ? { maxHeight: "600px", visibility: "visible" }
      : { maxHeight: "0px", visibility: "hidden" };

    return (
      <div className="App">
        <NavBar mission={this.handleMission} />
        <div className="mission" style={mission}>
          <Mission />
        </div>
        <div className="page">
          {this.props.loggedIn ? (
            <div className="column left" style={left}>
              <GroupContainer
                groups={this.props.groups}
                selectedGroup={this.props.selectedGroup}
              />
            </div>
          ) : (
            <div className="column left" style={left} />
          )}
          <MyCalendar myEventsList={myEventsList} style={right} />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ currentUser }, dispatch);
}

function mapStateToProps(state) {
  return {
    loggedIn: state.auth.loggedIn,
    user: state.auth.user,
    groups: state.groups.groups,
    selectedGroup: state.groups.selectedGroup,
    events: state.events.all
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
