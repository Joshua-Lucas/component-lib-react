import React from 'react'
import styled from 'styled-components'
import screenSize from '../Utills'

export const Label = styled.label`
  font-size: 1.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.primaryTextColor};
  text-transform: capitalize;
`
export const InputElement = styled.input`
  font-size: 1rem;
  margin-top: 0.25rem;
  margin-bottom: 2rem;
  padding: 1rem;

  &:hover {
    border: 2px solid ${(props) => props.theme.lightNeutralColor};
  }

  &:focus {
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none;
    border: 2px solid ${(props) => props.theme.lightNeutralColor};
    box-shadow: white 0 0 0 0.2rem,
      ${(props) => props.theme.primaryColor} 0 0 0 0.4rem;
  }

  @media ${screenSize.md} {
    padding: 0.5rem;
  }
`

const Input = ({ label, type, value, event }) => {
  const id = `input-${label.replace(' ', '').toLowerCase()}`
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
