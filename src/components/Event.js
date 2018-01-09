import React from 'react'
import { Modal } from 'semantic-ui-react'

export default class Event extends React.Component{

  state = {
    open: this.props.open
  }

  handleClose = () => {
    this.setState({ open: !this.state.open })
    this.props.close()
  }

  render(){
    return(
      <Modal size='tiny' open={this.state.open} closeIcon onClose={this.handleClose}>
        <Modal.Header>{this.props.event.title}</Modal.Header>
        <Modal.Content>
          {this.props.event.startDate.toString()}
        </Modal.Content>
      </Modal>
    )
  }
}
