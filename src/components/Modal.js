import React from 'react';
import { Modal, Button } from 'semantic-ui-react';
import FormContainer from './FormContainer.js';

const ModalContainer = (props) => {
  return(
    <Modal size='tiny' trigger={<Button basic secondary color="black" id="log">Log In</Button>}>
      <Modal.Content>
        <FormContainer/>
      </Modal.Content>
    </Modal>
  )
}

export default ModalContainer
