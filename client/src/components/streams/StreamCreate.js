import React from 'react'
import { Form, Field, useField } from 'react-final-form'
import { FORM_ERROR } from 'final-form'

// Obviously this could be reused across your project
const ErrorMessage = ({ name, component }) => {
    const {
      meta: { error, touched }
    } = useField(name, { subscription: { error: true, touched: true } })
    return error && touched
      ? React.createElement(component, null, error)
      : null
}


const StreamCreate = props => {

  const { handleSubmit, pristine, form, reset, submitting } = props
  return (
    <Form
   // onSubmit={onSubmit}
    initialValues={{ }}
     onSubmit={values =>  {
    //           alert('Hi there');// send values to the cloud
               }}
    validate={values => {
      // do validation here, and return errors object
              }}
      >
      {() => (
        <form className="ui form" onSubmit={handleSubmit}>
           <div>
             <label>Title</label>
             <Field name="title" component="input"type="text" placeholder="enter title"/>
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
           {/* <button className="ui button" type="button" disabled={submitting || pristine} > Reset
            </button>  */}
        </div>
      </form>
      )}
    </Form>
  )
}
export default StreamCreate