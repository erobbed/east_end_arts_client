import React from 'react';
import { List } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectGroup } from '../actions/groupActions'

class Group extends React.Component{

  handleClick = () => this.props.selectGroup(this.props.group)

  render(){
    return(
      <List.Item onClick={this.handleClick}>
        {this.props.group.name}
      </List.Item>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({selectGroup}, dispatch)
}

export default connect(null, mapDispatchToProps)(Group)
