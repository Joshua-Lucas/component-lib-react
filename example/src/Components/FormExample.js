import React, { useState } from 'react'
import {
  Input as FormInput,
  Buttons,
  FormDiv
} from '@jludev/component-lib-react'
import styled from 'styled-components'

/* This is an example of how you might use the elements of a form. 
    There is a generic form div but you could quickly just add your own styled-div
    if needed.
*/

// Styled-Components
const FormElement = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`
// Component
const FormExample = () => {
  // HOOKS
  const [nameInput, setNameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')

  const submittion = {
    name: nameInput,
    email: emailInput,
    password: passwordInput
  }

  const submitHandle = (e) => {
    e.preventDefault()
    console.log(submittion)
  }

  return (
    <FormDiv className='FormExample'>
      <FormElement onSubmit={submitHandle}>
        <FormInput
          label='Name'
          type='text'
          value={nameInput}
          event={(e) => setNameInput(e.target.value)}
        />
        <FormInput
          label='Email'
          type='Email'
          value={emailInput}
          event={(e) => setEmailInput(e.target.value)}
        />
        <FormInput
          label='Password'
          type='password'
          value={passwordInput}
          event={(e) => setPasswordInput(e.target.value)}
        />
        <Buttons name='submit' type='submit'>
          Submit
        </Buttons>
      </FormElement>
    </FormDiv>
  )
}

export default FormExample
