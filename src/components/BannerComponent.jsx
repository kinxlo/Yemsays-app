/* eslint-disable react/prop-types */
import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

const BannerComponent = ({ text }) => {
  const StyledBanner = styled(Box)`
    background-color: #f78214;
    // background-color: #c6f6d5;
    padding: 8px;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
  `
  const TextContainer = styled(Box)`
    position: absolute;
    left: 100%;
    font-size: 18px;
    font-weight: bolder;
    letter-spacing: 2px;
    color: white;
    white-space: nowrap;
    animation: bannerAnim 20s linear infinite;
    @keyframes bannerAnim {
      from {
        left: 100%;
      }
      to {
        left: -100%;
      }
    }
  `

  return (
    <StyledBanner>
      <TextContainer>{text}</TextContainer>
    </StyledBanner>
  )
}

export default BannerComponent
