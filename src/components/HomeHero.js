import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import styled from '@emotion/styled'

const Wrapper = styled.section`
  position: relative;
  min-height: 300px;
  height: auto;
  @media (min-width: ${props => props.theme.responsive.small}) {
    height: ${props => props.height || 'auto'};
  }
`
const BgImg = styled(StaticImage)`
  position: absolute;
  width: 100%;
  height: 100%;
  &::before {
    content: '';
    background: rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
`

const Title = styled.h1`
  z-index: 2;
  font-size: 5em;
  text-transform: capitalize;
  font-weight: 600;
  position: absolute;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  padding: 0 1rem;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  text-shadow: -6px 3px 0 #7A7A7A;
`
const SubTitle = styled.h2`
z-index: 2;
font-size: 3em;
text-transform: capitalize;
font-weight: 600;
position: absolute;
width: 100%;
max-width: ${props => props.theme.sizes.maxWidthCentered};
padding: 0 1rem;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
text-align: center;
color: white;
text-shadow: -2px 3px 0 #7A7A7A;
`

const HomeHero = props => (
    <Wrapper>
    <BgImage
        src='../images/home-background.jpg'
        alt='Home Background'
        backgroundColor='#eeeeee'
    />
    <Title>Home</Title>
    <SubTitle>Mikel-Jon (Mike) West</SubTitle>
    </Wrapper>
)

export default HomeHero