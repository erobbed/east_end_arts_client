import React from 'react';
import Group from './Group';
import { List } from 'semantic-ui-react'
import AddGroup from './AddGroup'

const GroupContainer = (props) => {

  let groups = props.groups.map( group => <Group group={group} key={group.id}/> )

  return(
    <div>
      <List divided verticalAlign='middle' className='groups'>
          {groups}
      </List>
      <AddGroup/>
    </div>
  )
}

export default GroupContainer
