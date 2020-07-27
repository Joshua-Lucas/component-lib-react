import styled from 'styled-components'
import screenSize from '../Utills/ContinerSize'

const FormDiv = styled.div`
  margin: 1rem;

  @media ${screenSize.md} {
    max-width: 85%;
  }
  @media ${screenSize.lg} {
    max-width: 35%;
  }
  @media ${screenSize.xl} {
    max-width: 20%;
  }
`

export default FormDiv
