import React from 'react'
import { Modal } from 'semantic-ui-react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { publish } from '../actions/eventActions';
import PublishButton from './PublishButton'

class Event extends React.Component{

  state = {
    open: this.props.open
  }

  handleClose = () => {
    this.setState({ open: !this.state.open })
    this.props.close()
  }

  publish = () => {
    this.props.publish(this.props.event.id)
  }

  render(){
    return(
      <Modal size='tiny' open={this.state.open} closeIcon onClose={this.handleClose}>
        <Modal.Header>
          {this.props.event.title}
          <PublishButton public={this.props.event.public} publish={this.publish}/>
        </Modal.Header>
        <Modal.Content>
          {this.props.event.startDate.toString()}
        </Modal.Content>
      </Modal>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({publish}, dispatch)
}

function mapStateToProps(state){
  return {user: state.auth.user}
}

export default connect(mapStateToProps, mapDispatchToProps)(Event)
