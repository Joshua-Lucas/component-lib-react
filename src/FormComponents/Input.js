import React from 'react'
import styled from 'styled-components'
import screenSize from '../Utills/ContinerSize'

const Label = styled.label`
  font-size: 1.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.primaryTextColor};
`
const InputElement = styled.input`
  font-size: 1rem;
  margin-top: 0.25rem;
  margin-bottom: 2rem;
  padding: 1rem;

  @media ${screenSize.md} {
    padding: 0.5rem;
  }
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
