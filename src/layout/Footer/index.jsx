// REACT DEFAULTS'

// COMPONENTS
import Container from '../Container'
// import Logo_dark from '../../assets/images/ticked_logo_light.png'
import { FaFacebookF, FaTwitter, FaLinkedin } from 'react-icons/fa'
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

const Footer = () => {
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
                    src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1680856120/project-yemsays/Group_87_qudnxl.png`}
                  />
                </Link>
              </Box>
              <Text
                color={`textGrey`}
                maxW={`351px`}
                margin={{ base: `auto`, md: `initial` }}
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
                <List as={`div`}>
                  <ListItem
                    cursor={`pointer`}
                    _hover={{ color: `primary` }}
                    color={`textGrey`}
                    textTransform={`capitalize`}
                    mb={`9px`}
                  >
                    <Link display={`inline`} href={'#company'}>
                      Company
                    </Link>
                  </ListItem>
                  <ListItem
                    cursor={`pointer`}
                    _hover={{ color: `primary` }}
                    color={`textGrey`}
                    textTransform={`capitalize`}
                    mb={`9px`}
                  >
                    <Link display={`inline`} href={'#team'}>
                      Team
                    </Link>
                  </ListItem>
                  <ListItem
                    cursor={`pointer`}
                    _hover={{ color: `primary` }}
                    color={`textGrey`}
                    textTransform={`capitalize`}
                    mb={`9px`}
                  >
                    <Link display={`inline`} href={'#testimonial'}>
                      Testimonial
                    </Link>
                  </ListItem>
                  <ListItem
                    cursor={`pointer`}
                    _hover={{ color: `primary` }}
                    color={`textGrey`}
                    textTransform={`capitalize`}
                    mb={`9px`}
                  >
                    <Link as={ReactLink} display={`inline`} to={'/contact'}>
                      Contact
                    </Link>
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
                  >
                    <Link as={ReactLink} display={`inline`} to={'/properties'}>
                      Listings
                    </Link>
                  </ListItem>
                  <ListItem
                    cursor={`pointer`}
                    _hover={{ color: `primary` }}
                    color={`textGrey`}
                    textTransform={`capitalize`}
                    mb={`9px`}
                  >
                    <Link as={ReactLink} display={`inline`} to={'/properties'}>
                      Lands
                    </Link>
                  </ListItem>
                  <ListItem
                    cursor={`pointer`}
                    _hover={{ color: `primary` }}
                    color={`textGrey`}
                    textTransform={`capitalize`}
                    mb={`9px`}
                  >
                    <Link as={ReactLink} display={`inline`} to={'/properties'}>
                      Houses
                    </Link>
                  </ListItem>
                  <ListItem
                    cursor={`pointer`}
                    _hover={{ color: `primary` }}
                    color={`textGrey`}
                    textTransform={`capitalize`}
                    mb={`9px`}
                  >
                    <Link as={ReactLink} display={`inline`} to={'/book-now'}>
                      Book Now
                    </Link>
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
              <Flex
                p={2}
                borderRadius={`100%`}
                bgColor={`white`}
                color={`primary`}
              >
                <FaLinkedin />
              </Flex>
              <Flex
                p={2}
                borderRadius={`100%`}
                bgColor={`white`}
                color={`primary`}
              >
                <FaFacebookF />
              </Flex>
              <Flex
                p={2}
                borderRadius={`100%`}
                bgColor={`white`}
                color={`primary`}
              >
                <FaTwitter />
              </Flex>
            </Box>
            <Divider my={5} />
            <Box textAlign={`center`} color={`primary`}>
              &copy;{new Date().getFullYear()} Yemsays All Rights Reserved
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
