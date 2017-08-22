import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import EditTarget from './EditTarget'
import {fetchTarget, deleteTarget, getQuotes, editTarget} from '../actions'

var id;

class ShowTarget extends Component {
  
  componentWillMount() {
    if (!isNaN(this.props.location.pathname.slice(-2))){
      id = this.props.location.pathname.slice(-2)
    }
    else if (!isNaN(this.props.location.pathname.slice(-1))){
      id = this.props.location.pathname.slice(-1)
    }
    this.props.fetchTarget(id)
  }

  onEditClick(){
    if (!isNaN(this.props.location.pathname.slice(-2))){
      id = this.props.location.pathname.slice(-2)
    }
    else if (!isNaN(this.props.location.pathname.slice(-1))){
      id = this.props.location.pathname.slice(-1)
    }
    return <EditTarget />
  }

  onDeleteClick() {
    if (!isNaN(this.props.location.pathname.slice(-2))){
      id = this.props.location.pathname.slice(-2)
    }
    else if (!isNaN(this.props.location.pathname.slice(-1))){
      id = this.props.location.pathname.slice(-1)
    }
    this.props.deleteTarget(id, ()=> {
      this.props.history.push('/targets')
    })
  }

  render() {
    const { target } = this.props
    const editUrl = `/targets/edit/${id}`

    if (!target) {
      return <div>Loading...</div>
    }
    
    return (
      <div className="container">
        <div className="row" style={{marginTop: "20", marginBottom: "20"}}>
        <Link className="col-2 align-self-start" to="/targets">Back to Index</Link>
        <div className="col-7"></div>
        <Link to={editUrl}><button
          onClick={this.onEditClick.bind(this)}
          className="btn btn-warning align-self-end" style={{marginRight: "20"}}
          >
          Edit Target
        </button>
        </Link>
        <button
          className="btn btn-danger align-self-end"
          onClick={this.onDeleteClick.bind(this)}>
          Delete Target
        </button>
        </div>
        <div><h3>Company Info</h3></div>
        <div>
        <table className="table table-hover table-bordered">
          <thead className="thead-inverse">
            <tr>
              <th className="text-center align-middle">Company Name</th>
              <th className="text-center align-middle">Status</th>
              <th className="text-center align-middle">Contact</th>
              <th className="text-center align-middle">Location</th>
              <th className="text-center align-middle">Employees</th>
              <th className="text-center align-middle">Website</th>
              <th className="text-center align-middle">Industry</th>
              <th className="text-center align-middle">Stock Symbol</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="align-middle">
                {target.title}
              </td>
              <td className="align-middle">
                {target.status}
              </td>
              <td>
                <div>{target.name}</div>
                <div>{target.email}</div>
                <div>{target.phone}</div>
              </td>
              <td className="align-middle">
                {target.location}
              </td>
              <td className="text-center align-middle">
                {target.employees}
              </td>
              <td className="align-middle">
                {target.website}
              </td>
              <td className="text-center align-middle">
                {target.industry}
              </td>
              <td className="text-center align-middle">
                {target.ticker}
              </td>
            </tr>
          </tbody>
        </table>
        </div>
        <div><h3>Financial Info</h3></div>
        <div>
          <table className="table table-hover table-bordered">
          <thead className="thead-inverse">
            <tr>
              <th className="text-center align-middle">Assets</th>
              <th className="text-center align-middle">Liabilities</th>
              <th className="text-center align-middle">Gross Profit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center align-middle">
                ${target.assets}
              </td>
              <td className="text-center align-middle">
                ${target.liabilities}
              </td>
              <td className="text-center align-middle">
                ${target.grossProfit}
              </td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ targets }, ownProps) {
  return { target: targets[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchTarget, deleteTarget, getQuotes, editTarget})(ShowTarget)