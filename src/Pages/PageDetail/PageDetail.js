import React from 'react'
import PropTypes from 'prop-types'
import Wysiwyg from '../../components/Wysiwyg/Wysiwyg'
import { axiosLocal } from '../../services/axiosInstances'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as PageDetailActions from './_actions/PageDetailActions'
import Button from 'react-bootstrap/Button'

function mapStateToProps (state) {
  return {
    pageDetailState: state.pageDetail
  }
}

function mapDispatchToProps (dispatch) {
  return {
    pageDetailActions: bindActionCreators(PageDetailActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageDetail)

function PageDetail (props) {
  const { pageDetailState: { isAjax, data, isEmpty }, pageDetailActions: { startLoading, ReLoading, endLoading } } = props
  const { text, title, img, date } = data
  if (isEmpty && !isAjax) {
    startLoading()
    axiosLocal.get('pageDetail.json').then((response) => {
      endLoading(response)
    })
  }

  return (
    <div>
      <Button
        onClick={() => {
          ReLoading()
        }}
      >
        Перезагрузить новость
      </Button>
      <h1>{title}</h1>
      <img src={img} alt='' />
      <div>{date}</div>
      <Wysiwyg text={text} />
    </div>
  )
}

PageDetail.propTypes = {
  pageDetailState: PropTypes.object,
  pageDetailActions: PropTypes.object
}
