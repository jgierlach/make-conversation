import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class Politics extends Component {
  render() {
    return (
      <div className='container'>
      <h4 className='center-align'>Generate a random question about politics!</h4>
     </div>
    )
  }
} 

module.exports = {
  Politics
}