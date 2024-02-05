// REACT DEFAULTS'

// COMPONENTS
import Container from '../Container'
// import Logo_dark from '../../assets/images/ticked_logo_light.png'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
// import { HashLink } from '@xzar90/react-router-hash-link'
import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Image,
  Link,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'
import { useState } from 'react'
import AlertComponent from '../../components/feedback/Alert'
import { useScrollToSection } from '../../hooks/useHashLink'

const Footer = () => {
  const [clickCount, setClickCount] = useState(1)
  const [isOpen, setOpen] = useState(false)
  const { scrollToSection } = useScrollToSection()

  const handleClick = () => {
    if (clickCount === 5) {
      setOpen(true)
      setClickCount(0)
    }
    setClickCount((prevState) => {
      return (prevState += 1)
    })
  }

  return (
    <Box bgColor={`bgBlack`} className='page_alignment'>
      <Container noPaddingBlock={'0'}>
        <Box color={`white`}>
          <Grid
            textAlign={{ base: `center`, md: `left` }}
            templateColumns={{ base: `repeat(1, 1fr)`, xl: `repeat(7, 1fr)` }}
            gap={{ base: 6, xl: 6 }}
          >
            <GridItem colSpan={{ lg: 3 }}>
              <Box
                h={`3rem`}
                m={{ base: `auto`, md: `initial` }}
                w={`fit-content`}
              >
                <Link as={ReactLink} to={`/`}>
                  <Image
                    width={`10rem`}
                    src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1683369127/project-yemsays/Group_86_dr3rfv.png`}
                  />
                </Link>
              </Box>
              <Text
                color={`textGrey`}
                maxW={`351px`}
                margin={{ base: `auto`, md: `initial` }}
                pt={3}
              >
                Lörem ipsum birade fanas. Tridonar myvis, seng om äniskort.
                Lörem ipsum birade fanas. Tridonarse fanas. Tridonar jmyvis,
                seng om äniskort.
              </Text>
            </GridItem>
            <GridItem colSpan={{ base: 2, xl: 1 }}>
              <Box>
                <Box h={{ lg: `3rem` }}>
                  <Text fontWeight={`bold`}>About</Text>
                </Box>
                <List>
                  <ListItem
                    cursor={`pointer`}
                    _hover={{ color: `primary` }}
                    color={`textGrey`}
                    textTransform={`capitalize`}
                    onClick={() => scrollToSection(`about-us`, `company`)}
                    mb={`9px`}
                  >
                    Company
                  </ListItem>

                  <ListItem
                    cursor={`pointer`}
                    _hover={{ color: `primary` }}
                    color={`textGrey`}
                    textTransform={`capitalize`}
                    onClick={() => scrollToSection(`about-us`, `team`)}
                    mb={`9px`}
                  >
                    Team
                  </ListItem>
                  <ListItem
                    cursor={`pointer`}
                    _hover={{ color: `primary` }}
                    color={`textGrey`}
                    textTransform={`capitalize`}
                    onClick={() => scrollToSection(`about-us`, `testimonial`)}
                    mb={`9px`}
                  >
                    Testimonial
                  </ListItem>
                  <ListItem
                    cursor={`pointer`}
                    _hover={{ color: `primary` }}
                    color={`textGrey`}
                    textTransform={`capitalize`}
                    onClick={() => scrollToSection(`contact`, ``)}
                  >
                    Contact
                  </ListItem>
                </List>
              </Box>
            </GridItem>
            <GridItem colSpan={{ base: 2, xl: 1 }}>
              <Box>
                <Box h={{ lg: `3rem` }}>
                  <Text fontWeight={`bold`}>Properties</Text>
                </Box>
                <List>
                  <ListItem
                    cursor={`pointer`}
                    _hover={{ color: `primary` }}
                    color={`textGrey`}
                    textTransform={`capitalize`}
                    mb={`9px`}
                    onClick={() => scrollToSection(`properties`, ``)}
                  >
                    Listings
                  </ListItem>
                  <ListItem
                    cursor={`pointer`}
                    _hover={{ color: `primary` }}
                    color={`textGrey`}
                    textTransform={`capitalize`}
                    mb={`9px`}
                    onClick={() => scrollToSection(`properties`, ``)}
                  >
                    Lands
                  </ListItem>
                  <ListItem
                    cursor={`pointer`}
                    _hover={{ color: `primary` }}
                    color={`textGrey`}
                    textTransform={`capitalize`}
                    mb={`9px`}
                    onClick={() => scrollToSection(`properties`, ``)}
                  >
                    Houses
                  </ListItem>
                  <ListItem
                    cursor={`pointer`}
                    _hover={{ color: `primary` }}
                    color={`textGrey`}
                    textTransform={`capitalize`}
                    mb={`9px`}
                    onClick={() => scrollToSection(`book-now`, ``)}
                  >
                    Book Now
                  </ListItem>
                </List>
              </Box>
            </GridItem>
            <GridItem colSpan={{ base: 2, xl: 2 }}>
              <Box>
                <Box h={{ lg: `3rem` }}>
                  <Text fontWeight={`bold`}>Contact</Text>
                </Box>
                <List>
                  <ListItem
                    cursor={`pointer`}
                    color={`textGrey`}
                    textTransform={`capitalize`}
                    mb={`9px`}
                  >
                    35a, Lörem ipsum birade fanas.
                  </ListItem>
                  <ListItem
                    cursor={`pointer`}
                    color={`textGrey`}
                    textTransform={`capitalize`}
                    mb={`9px`}
                  >
                    www.realestate.com
                  </ListItem>
                  <ListItem
                    cursor={`pointer`}
                    color={`textGrey`}
                    textTransform={`capitalize`}
                    mb={`9px`}
                  >
                    Support@realestate.com
                  </ListItem>
                  <ListItem
                    cursor={`pointer`}
                    color={`textGrey`}
                    textTransform={`capitalize`}
                    mb={`9px`}
                  >
                    0145782624
                  </ListItem>
                </List>
              </Box>
            </GridItem>
          </Grid>
          <Box>
            <Box
              display={`flex`}
              justifyContent={{ base: `center`, md: `initial` }}
              gap={3}
            >
              {/* <Flex
                p={2}
                borderRadius={`100%`}
                bgColor={`white`}
                color={`primary`}
              >
                <FaLinkedin />
              </Flex> */}
              <Flex
                p={2}
                borderRadius={`100%`}
                bgColor={`white`}
                color={`primary`}
              >
                <Link
                  isExternal
                  href='https://instagram.com/yemsays_properties'
                >
                  <FaInstagram />
                </Link>
              </Flex>
              <Flex
                p={2}
                borderRadius={`100%`}
                bgColor={`white`}
                color={`primary`}
              >
                <Link isExternal href='https://facebook.com/Ayodeji Oladimeji'>
                  <FaFacebookF />
                </Link>
              </Flex>
              {/* <Flex
                p={2}
                borderRadius={`100%`}
                bgColor={`white`}
                color={`primary`}
              >
                <FaTwitter />
              </Flex> */}
            </Box>
            <Divider my={5} />
            <Box onClick={handleClick} textAlign={`center`} color={`primary`}>
              &copy;{new Date().getFullYear()} Yemsays All Rights Reserved
              <AlertComponent
                action={`message`}
                message={{
                  title: `Developed by Binary Art.inc`,
                  desc: `you can contact us via our email Address:`,
                }}
                isOpen={isOpen}
                onClose={() => setOpen(!isOpen)}
              />
            </Box>
            <Text
              fontSize={`10px`}
              letterSpacing={`2px`}
              fontWeight={`thin`}
              textAlign={`center`}
            >
              Powered By BinaryArt.inc
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
