import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logoutUser} from '../actions/logout'

class Test extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
  return(<div>
      <h1 className="title is-1">This is a Test.  And it works!</h1>
  </div>)
  }
}


const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(Test)