import React from 'react';
import { Icon, Modal } from 'semantic-ui-react';
import CreateGroup from './CreateGroup'

class AddGroupModal extends React.Component{

  state = {
    open: false
  }

  handleClick = () => {
    this.setState({
      open: !this.state.open
    })
  }

  handleClose = () => this.setState({ open: false })

  render(){
    return(
      <div className='add'>
        <Modal size='tiny' open={this.state.open} closeIcon onClose={this.handleClose} trigger={<button size='mini' className='addgroup' onClick={this.handleClick}>Add Group<Icon name='plus'/></button>}>
          <Modal.Content>
            <CreateGroup close={this.handleClick}/>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

//THIS SHOULD BE A HOC!!!!

export default AddGroupModal
