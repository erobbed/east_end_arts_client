import React from 'react';
import Group from './Group';
import { List } from 'semantic-ui-react'
import AddGroupModal from './AddGroupModal'

const GroupContainer = (props) => {

  let groups = props.groups.map( group => <Group group={group} key={group.id}/> )

  return(
    <div className='column left'>
      <List divided verticalAlign='middle' className='groups'>
          {groups}
      </List>
      <AddGroupModal/>
    </div>
  )
}

export default GroupContainer
