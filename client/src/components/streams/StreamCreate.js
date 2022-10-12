import React from 'react'
import { Form, Field } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
import { connect } from 'react-redux'
import { createStream } from '../../actions'
import StreamForm from './StreamForm'

// Obviously this could be reused across your project
const ErrorMessage = ({ name, component }) => {
    const {
      meta: { error, touched }
    } = useField(name, { subscription: { error: true, touched: true } })
    return error && touched
      ? React.createElement(component, null, error)
      : null
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const onSubmit = async values => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const StreamCreate = props => {
  
  const { handleSubmit, pristine, form, reset, submitting } = props 
  
  return (
    <Form
   // onSubmit={handleSubmit}
    onSubmit={onSubmit}
    initialValues={{ }}
    //  onSubmit={values =>  {
    //   console.log(input.name.title);
    // //           alert('Hi there');// send values to the cloud
    //            }}
    render={({ handleSubmit, form, form: { reset }, submitting, pristine, values, validate }) => 
    //  validate={values => {
    //   // do validation here, and return errors object
    //           }}
    //   
    (
    <form className="ui form" onSubmit={handleSubmit}>
          <div>
             <label>Title</label>
             <Field name="title" component="input" type="text" placeholder="enter title"/>
           </div>
           <div className="ui form" onSubmit={handleSubmit}>
           <div>
             <label>Description</label>
             <Field name="description" component="input" type="text" placeholder="enter description" />
           </div>
        </div>
        <div>
          <button className="ui button primary" type="submit" disabled={submitting} >
            Submit
          </button>
          <button className="ui button"  disabled={submitting} type="reset" onClick={reset} > Reset
            </button>  
        </div>
      </form>
      )}
    />
  )

  const validate = (input) => {
    const errors = {}
    if(!input.title){
      errors.title= 'You must enter a title'
    }
    if(!input.description){
      errors.description= 'You must enter a description'
    }
    return errors;
  }
}
export default StreamCreate