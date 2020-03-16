import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

export const CtaButtonLink = styled(Link)`
  align-items: center;
  transition: background 200ms linear;
  font-size: ${props => props.theme.sizes.buttonText};
  font-family: ${props => props.theme.fontFamily};
  font-weight: 500;
  border-radius: 28px;
  padding: calc(${props => props.theme.sizes.buttonText} * 0.75) 24px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  min-width: 6em;
  margin: 3px;
  color: ${props => props.theme.colors.backgroundLight};
  text-decoration: none;
  background: #079af3;
  display: block;
  text-align: center;
  flex-shrink: 0;
  &:hover {
    opacity: 0.7;
  }
`

export default CtaButtonLink
