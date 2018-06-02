import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { currentUser } from "./actions/authActions";
import { getEvents } from "./actions/eventActions";
import { getLatestNotice } from "./actions/noticeActions";
import MyCalendar from "./components/assets/Calendar";
import NavBar from "./components/assets/nav/NavBar";
import Mission from "./components/assets/nav/Mission";
import About from "./components/assets/nav/About";
import Filter from "./components/hocs/Filter";
import "./App.css";
import "semantic-ui-css/semantic.min.css";

const WithFilter = Filter(MyCalendar);

class App extends Component {
  state = {
    mission: false,
    about: false,
    categories: [
      { id: 1, name: "Art Exhibit" },
      { id: 2, name: "Astronomy" },
      { id: 3, name: "Benefit Event" },
      { id: 4, name: "Book Signing" },
      { id: 5, name: "Children’s Program" },
      { id: 6, name: "Culinary" },
      { id: 7, name: "Ecology" },
      { id: 8, name: "Film" },
      { id: 9, name: "Lecture" },
      { id: 10, name: "Literary" },
      { id: 16, name: "Meeting" },
      { id: 11, name: "Music" },
      { id: 12, name: "Nature" },
      { id: 13, name: "Performance" },
      { id: 14, name: "Theatre" },
      { id: 15, name: "Walking Tours and Trails" }
    ]
  };

  componentDidMount() {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      return this.props.currentUser(jwt);
    } else {
      this.props.getEvents();
      this.props.getLatestNotice();
    }
  }

  handleMission = () => {
    this.setState({
      mission: !this.state.mission
    });
  };

  handleAbout = () => {
    this.setState({
      about: !this.state.about
    });
  };

  render() {
    let myEventsList = this.props.selectedGroup
      ? this.props.events.filter(
          event => event.group_id === this.props.selectedGroup.id
        )
      : this.props.events.filter(event => event.public);

    let left = this.state.about
      ? { width: "20%", opacity: "1" }
      : { width: "0px", opacity: "0" };
    let right = this.state.about
      ? { width: "80%" }
      : { width: "100%", margin: "0 auto" };
    let mission = this.state.mission
      ? { maxHeight: "600px", opacity: "1" }
      : { maxHeight: "0px", opacity: "0" };

    let about = this.state.about
      ? { width: "90%", opacity: "1", height: "auto" }
      : { width: "0px", opacity: "0", height: "0" };

    return (
      <div className="App">
        <NavBar mission={this.handleMission} about={this.handleAbout} />
        <div className="mission" style={mission}>
          <Mission />
        </div>
        <div className="page">
          <div className="column left" style={left}>
            <div className="about" style={about}>
              <About />
            </div>
          </div>
          <WithFilter
            categories={this.state.categories}
            myEventsList={myEventsList}
            style={right}
            {...this.props}
          />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { currentUser, getEvents, getLatestNotice },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    loggedIn: state.auth.loggedIn,
    user: state.auth.user,
    groups: state.groups.groups,
    selectedGroup: state.groups.selectedGroup,
    events: state.events.all,
    notice: state.notice.latest
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
