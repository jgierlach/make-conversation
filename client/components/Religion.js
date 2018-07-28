import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import GameInstructions from './GameInstructions'


class Religion extends Component {
  render() {
    return (
      <div className='container'>
        {/* <h1 className='center-align green'>Generate A Random Question About Religion!</h1> */}
        <GameInstructions />
        <div className='row'>
          <div className='col s12 center-align'>
            <button className='btn'>Generate</button>
           </div> 
        </div>
     </div>
    )
  }
} 

module.exports = {
  Religion
}