import React from 'react';
import { List } from 'semantic-ui-react'

class Group extends React.Component{

  render(){

    return(
      <List.Item>
        {this.props.group.name}
      </List.Item>
    )
  }
}

export default Group
