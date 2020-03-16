import React from 'react'
import styled from 'styled-components/macro'
import { useTranslation } from 'react-i18next'

import Footer from 'components/footer'
import Header from 'components/header'
import Title from 'components/title'
import ScrollAnchor from 'components/scroll-anchor'
import CtaButtonLink from 'components/cta-button-link'

import { requireRegionFile } from 'services/region-loader'
const flagImage = requireRegionFile('images/flag.jpg')

const Description = styled.h3`
  color: ${props => props.theme.colors.text};
  font-size: calc(${props => props.theme.sizes.buttonText});
  padding: calc(${props => props.theme.sizes.buttonText} * 0.75);
  font-weight: 200;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
`

const Container = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  overflow-x: hidden;
  background-color: ${props => props.theme.colors.background};
`

const Body = styled.div`
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 18px;
  justify-content: center;
  max-width: 600px;
  position: relative;
  z-index: 1;
`

const FooterContainer = styled.div`
  display: block;
  position: relative;
  width: 100%;
`

const Flag = styled.div`
  width: 16vw;
  height: 16vw;
  top: -16vw;
  right: 0px;
  background-image: url(${flagImage});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: bottom right;
  position: absolute;
  z-index: 0;
`

export const WelcomePage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <ScrollAnchor />
      <Header
        showRegionPicker
        css={`
          flex-shrink: 0;
        `}
      />
      <Body>
        <Title>{t('welcomePage.title')}</Title>
        <Description>{t('welcomePage.description')}</Description>
        <CtaButtonLink to="/chat/">{t('welcomePage.button')}</CtaButtonLink>
      </Body>
      <FooterContainer>
        <Flag />
        <Footer />
      </FooterContainer>
    </Container>
  )
}

export default WelcomePage
