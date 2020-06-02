import React from 'react'
import { RemoteDataProvider } from '@aic/react-remote-data-provider'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'
const options = {
  request: {
    url: 'pageList.json'
  },
  reducerKey: 'PageListRDP'
}
function PageList () {
  return (
    <RemoteDataProvider {...options}>
      {({ response }) => {
        return (
          response.map(({ title, description }, key) => (
            <ListGroup.Item key={key} as={Link} to='/detail'>
              <h3>{title}</h3>
              <div>{description}</div>
            </ListGroup.Item>
          ))
        )
      }}
    </RemoteDataProvider>
  )
}

export default PageList
