import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
  font-size: 1.5rem;
`
const InputElement = styled.input`
  font-size: 1.5rem;
  margin-top: 1rem;
  padding: 1rem;
`

const Input = ({ label, type, value, event }) => {
  const id = `use-input-${label.replace(' ', '').toLowerCase()}`
  return (
    <React.Fragment>
      <Label htmlFor={id}>
        {label}
        <InputElement
          type={type}
          id={id}
          name={label}
          value={value}
          placeholder={`Enter ${label}`}
          onChange={event}
        />
      </Label>
    </React.Fragment>
  )
}
export default Input
