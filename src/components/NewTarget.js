import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {createTarget} from '../actions'

class NewTarget extends Component{

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
    this.props.createTarget(values, ()=> {
      this.props.history.push('/')
    })
  }

  render(){
    const {handleSubmit} = this.props

    return (
      <div>
        <div className="text-center" style={{marginTop: "20"}}>
          <h3>Create a new Target</h3>
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
            label="Assets (dollars)"
            name="assets"
            component={this.renderField}
          />
          <Field
            label="Liabilities (dollars)"
            name="liabilities"
            component={this.renderField}
          />
          <Field
            label="Gross Profit (dollars)"
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
            <Link to="/" className="btn btn-danger">Cancel</Link>
          </div>
        </form>
      </div>
    )
  }
}

function validate(values){
  const errors = {}
  const minValue = 3

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
  if ( !values.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) ) {
    errors.email = "Please enter a valid contact email address"
  }
  if (!values.phone) {
    errors.phone = "Please enter a contact phone number"
  }
  if (!values.assets) {
    errors.phone = "Please enter the target's assets"
  }
  if (!values.liabilities) {
    errors.phone = "Please enter the target's liabilities"
  }
  if (!values.grossProfit) {
    errors.phone = "Please enter the target's YTD gross profit"
  }
  if (values.status === undefined) {
    errors.status = "Please select a status"
  }

  return errors
}

export default reduxForm({
  validate,
  form: 'NewTargetForm'
})(
connect(null, {createTarget})(NewTarget)
)