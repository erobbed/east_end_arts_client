import React from 'react';
import Group from './Group';
import { List } from 'semantic-ui-react'
import AddGroupModal from './AddGroupModal'
import AddEventModal from './AddEventModal'

const GroupContainer = (props) => {

  let groups = props.groups.map( group => <Group group={group} key={group.id} selectedGroup={props.selectedGroup}/> )

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
