import React from 'react';
import { List } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Group extends React.Component{

  handleClick = () => console.log('click!')

  render(){
    return(
      <List.Item onClick={this.handleClick}>
        <Link to={`/${this.props.group.name}`}>{this.props.group.name}</Link>
      </List.Item>
    )
  }
}

export default Group
