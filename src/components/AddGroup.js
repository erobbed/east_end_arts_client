import React from 'react';
import { Button, Icon, Modal } from 'semantic-ui-react'

export default class AddGroup extends React.Component{

  handleClick = () => {
    console.log('click!');
  }

  render(){
    return(
      <Modal size='tiny' trigger={<Button size='mini' className='addgroup' icon onClick={this.handleClick}><Icon name='plus'/></Button>}>
        <Modal.Content>
          <div>hello world</div>
        </Modal.Content>
      </Modal>

    )
  }
}
