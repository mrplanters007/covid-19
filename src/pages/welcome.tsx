import React from 'react'

import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { useTranslation } from 'react-i18next'

import Footer from 'components/footer'
import Header from 'components/header'
import Title from 'components/title'
import ScrollAnchor from 'components/scroll-anchor'

import { requireRegionFile } from 'services/region-loader'
import { checkClassesValidity } from 'services/content'
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

const GetStartedButton = styled(Link)`
  color: #fff;
  font-size: calc(${props => props.theme.sizes.buttonText} * 1.25);
  font-family: ${props => props.theme.fontFamily};
  font-weight: 500;
  padding: 0.75em 1.25em;
  font-weight: 800;
  justify-content: center;
  flex-wrap: wrap;
  display: flex;
  text-decoration: none;
  border-radius: 30px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: opacity 300ms ease-in-out;
  background-color: ${props => props.theme.colors.primary};
  &:hover {
    opacity: 0.7;
  }
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

const Subtext = styled.h4`
  color: ${props => props.theme.colors.text};
  font-size: calc(${props => props.theme.sizes.buttonText} * 0.75);
  padding: 0 calc(${props => props.theme.sizes.buttonText} * 0.75);
  font-weight: 200;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
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

  const previousRunClasses = localStorage.getItem('resulting_classes')
  const previousRunIsValid =
    previousRunClasses && checkClassesValidity(previousRunClasses.split(','))

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
        <div>
          <GetStartedButton to="/chat/">
            {t('welcomePage.button')}
          </GetStartedButton>
        </div>
        <Subtext>
          {previousRunClasses && (
            <p>
              {!previousRunIsValid ? (
                t('welcomePage.previousRunExpired')
              ) : (
                <Link to={`/info?id=${previousRunClasses}`}>
                  {t('welcomePage.previousRunLink')}
                </Link>
              )}
            </p>
          )}
        </Subtext>
      </Body>
      <FooterContainer>
        <Flag />
        <Footer />
      </FooterContainer>
    </Container>
  )
}

export default WelcomePage
