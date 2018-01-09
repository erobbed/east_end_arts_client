import React from 'react';
import { Button, Icon, Modal } from 'semantic-ui-react';
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

  render(){
    return(
      <Modal size='tiny' open={this.state.open} trigger={<Button size='mini' className='addgroup' icon onClick={this.handleClick}><Icon name='plus'/></Button>}>
        <Modal.Content>
          <CreateGroup close={this.handleClick}/>
        </Modal.Content>
      </Modal>
    )
  }
}

export default AddGroupModal
