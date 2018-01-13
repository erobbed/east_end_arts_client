import React from 'react';
import { Button } from 'semantic-ui-react';

export default class PublishButton extends React.Component{

  state = {
    active: this.props.public
  }

  handleClick = () => {
    this.setState({ active: !this.state.active })
    this.props.publish()
  }

  render(){
    let pub = this.state.active ? 'Published' : 'Publish?'
    return(
      <Button toggle circular size='mini' active={this.state.active} onClick={this.handleClick}>
        {pub}
      </Button>
    )
  }
}
