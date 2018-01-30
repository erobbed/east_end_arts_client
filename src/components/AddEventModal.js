import React from "react";
import { Modal } from "semantic-ui-react";
import CreateEvent from "./CreateEvent";

class AddEventModal extends React.Component {
  state = {
    open: false
  };

  handleClick = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div className="add">
        <Modal
          size="tiny"
          open={this.state.open}
          closeIcon
          onClose={this.handleClose}
          trigger={
            <button onClick={this.handleClick} className="addevent">
              Add Event
            </button>
          }
        >
          <Modal.Content>
            <CreateEvent group={this.props.group} close={this.handleClick} />
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

//THIS SHOULD BE A HOC!!!!

export default AddEventModal;
