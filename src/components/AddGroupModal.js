import React from "react";
import { Modal } from "semantic-ui-react";
import CreateGroup from "./CreateGroup";

class AddGroupModal extends React.Component {
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
      <div>
        <Modal
          size="tiny"
          open={this.state.open}
          closeIcon
          onClose={this.handleClose}
          trigger={
            <button className="addgroup" onClick={this.handleClick}>
              Add Group
            </button>
          }
        >
          <Modal.Content>
            <CreateGroup close={this.handleClick} />
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

//THIS SHOULD BE A HOC!!!!

export default AddGroupModal;
