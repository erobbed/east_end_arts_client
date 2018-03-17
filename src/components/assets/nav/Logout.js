import React from "react";
import { Button } from "semantic-ui-react";

export default class Logout extends React.Component {
  handleLogout = () => {
    this.props.logout();
  };

  render() {
    return (
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
  }
}
