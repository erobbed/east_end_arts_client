import React from 'react';
import Group from './Group';
import { List } from 'semantic-ui-react'

const GroupContainer = (props) => {

  let groups = props.groups.map( (group, ind) => <Group group={group} key={ind}/> )

  return(
    <List divided verticalAlign='middle' className='groups'>
        {groups}
    </List>
  )
}

export default GroupContainer
