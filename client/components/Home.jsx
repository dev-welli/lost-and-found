import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logoutUser} from '../actions/logout'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
  return(<div>
      <h1 className="title is-1">This will be a home page.  And it works!</h1>
  </div>)
  }
}


const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(Home)