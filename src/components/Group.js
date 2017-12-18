import React from 'react';
import { List } from 'semantic-ui-react'

class Group extends React.Component{

  handleClick = () => console.log('click!')

  render(){
    return(
      <List.Item onClick={this.handleClick}>
        {this.props.group.name}
      </List.Item>
    )
  }
}

export default Group
