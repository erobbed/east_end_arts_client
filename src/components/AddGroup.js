import React from 'react';
import { Button, Icon } from 'semantic-ui-react'

export default class AddGroup extends React.Component{

  render(){
    return(
      <Button size='mini' className='addgroup' icon><Icon name='plus'/></Button>
    )
  }
}
