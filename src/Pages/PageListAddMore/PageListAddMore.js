import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { RemoteDataProvider } from '@aic/react-remote-data-provider'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const options = {
  request: {
    url: 'pageList.json'
  },
  reducerKey: 'PageList'
}

function PageListAddMore () {
  return (
    <>
      <h1>Список</h1>
      <ListGroup>
        <RemoteDataProvider {...options}>
          {({ response: { data } }) => {
            return (
              data.map(({ title, description, code }, key) => (
                <ListGroup.Item key={key} as={Link} to={`/list-add-more/${code}`}>
                  <h3>{title}</h3>
                  <div>{description}</div>
                </ListGroup.Item>
              ))
            )
          }}
        </RemoteDataProvider>
      </ListGroup>
      <Button
        onClick={() => {
          console.log('Загрузить еще')
        }}
      >
        Показать еще
      </Button>
    </>
  )
}

export default PageListAddMore
