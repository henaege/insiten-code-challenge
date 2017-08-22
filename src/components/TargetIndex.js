import _ from 'lodash'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchTargets} from '../actions'
import {Link} from 'react-router-dom'

class TargetIndex extends Component{

  componentDidMount(){
    this.props.fetchTargets()
  }

  renderTargets() {
    return _.map(this.props.targets, target => {
      return (
        <Link to={`/targets/${target.id}`}>
          <li className="list-group-item" key={target.id}>
            {target.title}
          </li>
        </Link>
      )
    })
  }

  

  render(){
    return(
      <div>
        <div className="text-right" style={{marginTop: "20"}}>
          <Link className="btn btn-primary" to="/targets/new">
            New Target
          </Link>
        </div>
        <h3>Targets</h3>
        
        <ul className="list-group">
          {this.renderTargets()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {targets: state.targets}
}

export default connect(mapStateToProps, {fetchTargets})(TargetIndex)