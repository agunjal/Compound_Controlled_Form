import React from 'react'
import { render } from 'react-dom'

import './style.css'
import { ControlledForm, Field, FormSubmit } from './Forms'

const App = () => (
  <ControlledForm onSubmit={(fields) => alert(JSON.stringify(fields, null, 2))}>
    <Field label="First Name" name="first" required={true} />
    <Field label="Last Name" name="last" required={true} />
    <Field label="Email" name="email" required={true} />
    <Field label="Favorite Color" name="favorite_color" required={true} />

    <FormSubmit>All Done</FormSubmit>
  </ControlledForm>
)

render(<App />, document.getElementById('root'))
