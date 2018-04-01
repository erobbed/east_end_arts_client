import React from "react";
import { Button } from "semantic-ui-react";

export default class DeleteButton extends React.Component {
  handleClick = () => {
    this.props.deleteEvent();
  };

  render() {
    return (
      <Button size="mini" onClick={this.handleClick}>
        Delete Event
      </Button>
    );
  }
}
