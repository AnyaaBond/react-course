import React, { useState } from 'react'
import data from './assets/data.js'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import css from '../../components/Menu/Menu.module.scss'

function PageList () {
  const { list: dataList } = data
  const [list, setList] = useState(dataList)

  const renderButLink = ({ list }) => {
    if (list.length > 4) {
      return (
        <div><Link to='/' activeClassName={css.active} exact>Посмотреть все новости</Link></div>
      )
    } else {
      return (
        <Button
          onClick={() => {
            setList([...list, ...data.list])
          }}
        >
          Показать еще
        </Button>
      )
    }
  }
  return (
    <>
      <h1>Список</h1>
      <ListGroup>
        {list.map(({ title, description }, key) => (
          <ListGroup.Item key={key} as={Link} to='/detail'>
            <h3>{title}</h3>
            <div>{description}</div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      {renderButLink({ list })}
    </>
  )
}

export default PageList
