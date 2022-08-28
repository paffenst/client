import React from 'react'
import { Form, Field, useField } from 'react-final-form'

// Obviously this could be reused across your project
const ErrorMessage = ({ name, component }) => {
    const {
      meta: { error, touched }
    } = useField(name, { subscription: { error: true, touched: true } })
    return error && touched
      ? React.createElement(component, null, error)
      : null
}
//new StreamCreate code
const StreamCreate = props => {
  const { handleSubmit, pristine, form, submitting } = props
 
  return (
    <Form
    initialValues={{
                title: 'title',
                description: 'description'
              }}
              onSubmit={values =>  {
                this.props.handleSubmit(this.onSubmit)
                // send values to the cloud
              }}
              validate={values => {
                // do validation here, and return errors object
              }}
    >
      {() => (
        <form className="ui form" onSubmit={handleSubmit}>
           <div>
             <label>Title</label>
             <Field
               name="title"
               component="input"
               type="text"
               placeholder="enter title"
             />
           </div>
           <form className="ui form" onSubmit={handleSubmit}>
           <div>
             <label>Description</label>
             <Field
               name="description"
               component="input"
               type="text"
               placeholder="enter description"
             />
           </div>
           </form>
        <div>
          <button className="ui button primary" type="submit" disabled={submitting}>
            Submit
          </button>
          <button
            className="ui button"
            type="button"
            disabled={pristine || submitting}
            onClick={form}
            >
            Clear Values
          </button>
        </div>
      </form>
      )}
    </Form>
  )
}
export default StreamCreate