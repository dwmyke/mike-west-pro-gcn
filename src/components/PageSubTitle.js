import React from 'react'
import styled from '@emotion/styled'

const SubTitle = styled.h2`
  font-size: ${props => (props.small ? '1em' : '2em')};
  text-transform: capitalize;
  font-weight: 600;
  text-align: center;
  margin: 0 0 3rem 0;
  margin: ${props => (props.small ? '1rem 0 4rem 0' : '0 0 3rem 0')};
  line-height: 1.2;
  span {
    margin: 0 0 0 0.25em;
  }
  a {
    transition: all 0.2s;
    color: ${props => props.theme.colors.text};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }
`

const PageSubTitle = props => {
  return <SubTitle small={props.small}>{props.children}</SubTitle>
}

export default PageSubTitle