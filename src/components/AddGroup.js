import React from 'react';
import { Button, Icon } from 'semantic-ui-react'

export default class AddGroup extends React.Component{

  handleClick = () => {
    console.log('click!');
  }

  render(){
    return(
      <Button size='mini' className='addgroup' icon onClick={this.handleClick}><Icon name='plus'/></Button>
    )
  }
}
