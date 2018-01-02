import React from 'react';
import { Button, Icon, Modal } from 'semantic-ui-react';
import CreateGroup from './CreateGroup'

const AddGroupModal = () =>{

  return(
    <Modal size='tiny' trigger={<Button size='mini' className='addgroup' icon><Icon name='plus'/></Button>}>
      <Modal.Content>
        <CreateGroup/>
      </Modal.Content>
    </Modal>

  )
}

export default AddGroupModal
