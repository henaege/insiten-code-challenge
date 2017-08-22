import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {editTarget, fetchTarget} from '../actions'

var id;

class EditTarget extends Component{

  

  componentWillMount() {
    if (!isNaN(this.props.location.pathname.slice(-2))){
      id = this.props.location.pathname.slice(-2)
    }
    else if (!isNaN(this.props.location.pathname.slice(-1))){
      id = this.props.location.pathname.slice(-1)
    }
    this.props.fetchTarget(id)
  }

  renderField(field){
    const {meta: {touched, error}} = field
    const className = `form-group ${touched && error ? 'has-danger' : ''}`

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">{touched ? error : ''}</div>
      </div>
    )
  }

  onSubmit(values){
    if (!isNaN(this.props.location.pathname.slice(-2))){
      id = this.props.location.pathname.slice(-2)
    }
    else if (!isNaN(this.props.location.pathname.slice(-1))){
      id = this.props.location.pathname.slice(-1)
    }
    this.props.editTarget(values, id, ()=> {
      this.props.history.push(`/targets/${id}`)
    })
  }

  render(){
    const {handleSubmit} = this.props
    if (!isNaN(this.props.location.pathname.slice(-2))){
      id = this.props.location.pathname.slice(-2)
    }
    else if (!isNaN(this.props.location.pathname.slice(-1))){
      id = this.props.location.pathname.slice(-1)
    }

    return (
      <div>
        <div className="text-center" style={{marginTop: "20"}}>
          <h3>Edit Target</h3>
        </div>
        <form style={{marginTop: "20"}}onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Target Name"
            name="title"
            component={this.renderField}
          />
          <Field
            label="Location"
            name="location"
            component={this.renderField}
          />
          <Field
            label="Website"
            name="website"
            component={this.renderField}
          />
          <Field
            label="# Employees"
            name="employees"
            component={this.renderField}
          />
          <div>
            <label>Industry</label>
          </div>
          <Field label="Industry" name="industry" component="select" >
              <option />
              <option value="Aerospace">Aerospace</option>
              <option value="Chemical">Chemical</option>
              <option value="Defense">Defense</option>
              <option value="Energy">Energy</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Financial Services">Financial Services</option>
              <option value="Food & Beverage">Food & Beverage</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Hospitality">Hospitality</option>
              <option value="Mass Media">Mass Media</option>
              <option value="Research">Research</option>
              <option value="Retail">Retail</option>
              <option value="Tech">Tech</option>
              <option value="Telecommunications">Telecommunications</option>
          </Field>
          <Field
            label="Stock Symbol"
            name="ticker"
            component={this.renderField}
          />
          <Field
            label="Contact Name"
            name="name"
            component={this.renderField}
          />
          <Field
            label="Contact Email"
            name="email"
            component={this.renderField}
          />
          <Field
            label="Contact Phone"
            name="phone"
            component={this.renderField}
          />
          <Field
            label="Assets"
            name="assets"
            component={this.renderField}
          />
          <Field
            label="Liabilities"
            name="liabilities"
            component={this.renderField}
          />
          <Field
            label="Gross Profit"
            name="grossProfit"
            component={this.renderField}
          />
          <div>
            <label>Status</label>
          </div>
          <Field label="Status" name="status" component="select" >
              <option />
              <option value="Researching">Researching</option>
              <option value="Pending Approval">Pending Approval</option>
              <option value="Approved">Approved</option>
              <option value="Declined">Declined</option>
            </Field>
          <div style={{marginTop: "20", marginBottom: "20"}}>
            <button type="submit" className="btn btn-primary">Save</button>
            <Link to={`/targets/${id}`} className="btn btn-danger">Cancel</Link>
          </div>
        </form>
      </div>
    )
  }
}

function validate(values){
  const errors = {}

  if (!values.title) {
    errors.title = "Please enter a title"
  }
  if (!values.location) {
    errors.location = "Please enter a location (eg., Atlanta, GA"
  }
  if (!values.website) {
    errors.website = "Please enter a web address"
  }
  if (!values.employees) {
    errors.employees = "Please enter number of employees"
  }
  if (!values.industry) {
    errors.industry = "Please enter an industry"
  }
  if (!values.ticker) {
    errors.ticker = "Please enter a stock symbol"
  }
  if (!values.name) {
    errors.name = "Please enter a contact name"
  }
  if ( values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) ) {
    errors.email = "Please enter a valid contact email address"
  }
  if (!values.phone) {
    errors.phone = "Please enter a contact phone number"
  }
  if (!values.status) {
    errors.status = "Please select a status"
  }

  return errors
}

function mapStateToProps({ targets }, ownProps) {
  if (!isNaN(ownProps.location.pathname.slice(-2))){
      id = ownProps.location.pathname.slice(-2)
    }
    else if (!isNaN(ownProps.location.pathname.slice(-1))){
      id = ownProps.location.pathname.slice(-1)
    }
  return { initialValues: targets[id] }
}

export default connect(mapStateToProps, {editTarget, fetchTarget})(reduxForm({
  validate,
  form: 'editform'
})(EditTarget));