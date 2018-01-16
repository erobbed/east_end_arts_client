import React from 'react';
import Group from './Group';
import { List } from 'semantic-ui-react'
import AddGroupModal from './AddGroupModal'
import AddEventModal from './AddEventModal'

const GroupContainer = (props) => {

  let sortable = (a ,b) => {
    let newA = (a.name.split(' ')[0] === 'The' ? a.name.split(' ')[1] : a.name.split(' ')[0])
    let newB = (b.name.split(' ')[0] === 'The' ? b.name.split(' ')[1] : b.name.split(' ')[0])
    return newA < newB ? -1 : newA > newB ? 1: 0
  }
  let groups = props.groups.sort( (a, b) => sortable(a, b) ).map( group => <Group group={group} key={group.id} selectedGroup={props.selectedGroup}/> )

  return(
    <div className='column left'>
      <List divided verticalAlign='middle' className='groups'>
          {groups}
      </List>
      <AddGroupModal/>
      { props.selectedGroup ? <AddEventModal group={props.selectedGroup}/> : null }
    </div>
  )
}

export default GroupContainer
