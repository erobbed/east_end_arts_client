import React from 'react';
import Group from './Group';
import { List, Button, Icon } from 'semantic-ui-react'

const GroupContainer = (props) => {

  let groups = props.groups.map( group => <Group group={group} key={group.id}/> )

  return(
    <List divided verticalAlign='middle' className='groups'>
        <Button size='mini' icon><Icon name='plus' className='addgroup'/></Button>
        {groups}
    </List>
  )
}

export default GroupContainer
