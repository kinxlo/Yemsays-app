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
    <Box bgColor={`black`} className='page_alignment'>
      <Container noPaddingBlock={'0'}>
        <Box color={`white`}>
          <Grid
            textAlign={{ base: `center`, md: `left` }}
            templateColumns={{ base: `repeat(1, 1fr)`, xl: `repeat(7, 1fr)` }}
            gap={{ xl: 6 }}
          >
            <GridItem colSpan={3}>
              <Box
                h={`3rem`}
                m={{ base: `auto`, md: `initial` }}
                w={`fit-content`}
              >
                <Link as={ReactLink} to={`/`}>
                  <Image
                    src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1677576945/project-yemsays/Group_86_btjv9i.png`}
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
                <Box h={`3rem`}>
                  <Text fontWeight={`bold`}>About</Text>
                </Box>
                <List>
                  <ListItem
                    color={`textGrey`}
                    textTransform={`capitalize`}
                    mb={`9px`}
                  >
                    Company
                  </ListItem>
                  <ListItem
                    color={`textGrey`}
                    textTransform={`capitalize`}
                    mb={`9px`}
                  >
                    Team
                  </ListItem>
                  <ListItem
                    color={`textGrey`}
                    textTransform={`capitalize`}
                    mb={`9px`}
                  >
                    Testimonial
                  </ListItem>
                  <ListItem
                    color={`textGrey`}
                    textTransform={`capitalize`}
                    mb={`9px`}
                  >
                    Contact
                  </ListItem>
                </List>
              </Box>
            </GridItem>
            <GridItem colSpan={{ base: 2, xl: 1 }}>
              <Box>
                <Box h={`3rem`}>
                  <Text fontWeight={`bold`}>Properties</Text>
                </Box>
                <List>
                  <ListItem
                    color={`textGrey`}
                    textTransform={`capitalize`}
                    mb={`9px`}
                  >
                    Listings
                  </ListItem>
                  <ListItem
                    color={`textGrey`}
                    textTransform={`capitalize`}
                    mb={`9px`}
                  >
                    Lands
                  </ListItem>
                  <ListItem
                    color={`textGrey`}
                    textTransform={`capitalize`}
                    mb={`9px`}
                  >
                    Houses
                  </ListItem>
                  <ListItem
                    color={`textGrey`}
                    textTransform={`capitalize`}
                    mb={`9px`}
                  >
                    Book Now
                  </ListItem>
                </List>
              </Box>
            </GridItem>
            <GridItem colSpan={{ base: 2, xl: 2 }}>
              <Box>
                <Box h={`3rem`}>
                  <Text fontWeight={`bold`}>Contact</Text>
                </Box>
                <List>
                  <ListItem
                    color={`textGrey`}
                    textTransform={`capitalize`}
                    mb={`9px`}
                  >
                    35a, Lörem ipsum birade fanas.
                  </ListItem>
                  <ListItem
                    color={`textGrey`}
                    textTransform={`capitalize`}
                    mb={`9px`}
                  >
                    www.realestate.com
                  </ListItem>
                  <ListItem
                    color={`textGrey`}
                    textTransform={`capitalize`}
                    mb={`9px`}
                  >
                    Support@realestate.com
                  </ListItem>
                  <ListItem
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
