import React from 'react';
import Group from './Group';
import { List, Button, Icon } from 'semantic-ui-react'

const GroupContainer = (props) => {

  let groups = props.groups.map( group => <Group group={group} key={group.id}/> )

  return(
    <div>
      <Button size='mini' className='addgroup' icon><Icon name='plus'/></Button>
      <List divided verticalAlign='middle' className='groups'>
          {groups}
      </List>
    </div>
  )
}

export default GroupContainer
