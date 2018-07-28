import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = () => (
  <div>
    <h1 className='center-align'>Start Your Conversation!</h1>
        <div className='container'>
          <div className='row'>
            <div className='col s12 center-align'>
          <Link to="/religion"><button type='button' className='btn red center-align'>Religion</button></Link>
            </div>
          </div>
          <div className='row'>
            <div className='col s12 center-align'>
          <Link to="travel"><button type='button' className='btn blue center-align'>Travel</button></Link>
            </div>
          </div>
          <div className='row'>
            <div className='col s12 center-align'>
          <Link to="/politics"><button type='button' className='btn green center-align'>Politics</button></Link>
            </div>
          </div>
        </div>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
