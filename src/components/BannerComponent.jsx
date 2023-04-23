/* eslint-disable react/prop-types */
import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

const BannerComponent = ({ text }) => {
  const [isVisible, setIsVisible] = useState(true)

  const StyledBanner = styled(Box)`
    position: absolute;
    left: 0;
    background-color: #f78214;
    padding: 8px;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
    white-space: nowrap;
    visibility: ${isVisible ? `visible` : `hidden`};
  `

  const TextContainer = styled(Box)`
    position: absolute;
    left: 100%;
    font-size: 18px;
    font-weight: bolder;
    letter-spacing: 2px;
    color: white;
    white-space: nowrap;
    animation: bannerAnim 15s linear 1;
    @keyframes bannerAnim {
      from {
        left: 100%;
      }
      to {
        left: -100%;
      }
    }
  `

  const onAnimationEnd = () => {
    setIsVisible(false)
  }

  return (
    <>
      {isVisible && (
        <StyledBanner onAnimationEnd={onAnimationEnd}>
          <TextContainer>{text}</TextContainer>
        </StyledBanner>
      )}
    </>
  )
}

export default BannerComponent
