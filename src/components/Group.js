import React from 'react';
import { List } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setGroup } from '../actions/groupActions'

class Group extends React.Component{

  handleClick = () => this.props.setGroup(this.props.group)

  render(){
    return(
      <List.Item onClick={this.handleClick}>
        {this.props.group.name}
      </List.Item>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({setGroup}, dispatch)
}

export default connect(null, mapDispatchToProps)(Group)
