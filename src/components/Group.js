import React from 'react';
import { List } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectGroup, deselectGroup } from '../actions/groupActions'

class Group extends React.Component{

  handleClick = () => {
    if (this.props.selectedGroup){
      if (this.props.selectedGroup.id === this.props.group.id){
        this.props.deselectGroup()
      } else {
        this.props.selectGroup(this.props.group)
      }
    }
    else {
      this.props.selectGroup(this.props.group)
    }
  }

  render(){
    let style = this.props.selectedGroup.id === this.props.group.id ? {fontWeight: 'bold', textDecoration: 'underline', color: 'green'} : {fontWeight: 'normal'}
    return(
      <List.Item onClick={this.handleClick} style={style}>
        {this.props.group.name}
      </List.Item>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({selectGroup, deselectGroup}, dispatch)
}

export default connect(null, mapDispatchToProps)(Group)
