// REACT DEFAULTS
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Image, Select } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'

// COMPONENTS
import Container from '../Container'
import { VscMenu, VscClose } from 'react-icons/vsc'

// STYLES
import styles from './NavBar.module.scss'
import LinkButton from '../../components/buttons/link-button/LinkButton'
import { Text } from '@chakra-ui/react'

const NavBar = ({ transparentBg }) => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [homeActive, setHomeActive] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [windowPosition, setWindowPosition] = useState(0)
  const location = useLocation()
  const dispatch = useDispatch()

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName)
  }

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  const handleCloseNavBar = () => {
    setIsNavOpen(false)
  }

  useEffect(() => {
    if (location.pathname === '/') {
      setHomeActive(true)
    } else {
      setHomeActive(false)
    }

    if (isNavOpen) {
      window.document.body.style.overflowY = 'hidden'
    } else {
      window.document.body.style.overflowY = 'scroll'
    }
  }, [isNavOpen, location.pathname, windowPosition])

  useEffect(() => {
    window.onscroll = () => {
      setWindowPosition(window.scrollY)
      // console.log('SCROLLEDEVENT')
    }

    if (windowPosition >= 16) {
      setIsScrolled(true)
      // console.log('SCROLLED')
    } else {
      setIsScrolled(false)
    }
  }, [windowPosition])

  const changeCurrency = (e) => {
    dispatch({
      type: `properties/changeCurrency`,
      payload: { currency: e.currentTarget.value },
    })
  }

  return (
    <nav
      className={`${styles.navBar} ${`nav_alignment`} ${
        isScrolled && styles.invertNavBar
      } ${transparentBg ? styles.transparentBg : styles.defaultBg} `}
    >
      <Container paddingBlock={'0'}>
        <div className={styles.navContent}>
          <div className={styles.navBrand}>
            <Link to={'/'}>
              <Image
                boxSize={`5rem`}
                className={styles.navLogo}
                src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1682094985/project-yemsays/New_Logo_fyelao.png`}
                alt='logo'
              />
            </Link>

            <button className={styles.hamburger} onClick={toggleNav}>
              {isNavOpen ? <VscClose /> : <VscMenu />}
            </button>
          </div>

          {
            <div
              className={`${styles.navLinks} ${
                isNavOpen ? styles.navOpen : styles.navClose
              }`}
            >
              <div className={styles.navItems}>
                <Link
                  className={styles.navLink}
                  to={'/'}
                  onClick={handleCloseNavBar}
                >
                  <Text color={homeActive ? `primary` : `white`}>Home</Text>
                </Link>
                <Link
                  className={styles.navLink}
                  to='/about-us'
                  onClick={handleCloseNavBar}
                >
                  <Text color={activeRoute(`about-us`) ? `primary` : `white`}>
                    About Us
                  </Text>
                </Link>
                <Link
                  className={styles.navLink}
                  to='/properties'
                  onClick={handleCloseNavBar}
                  color={`red`}
                >
                  <Text
                    color={activeRoute(`/properties`) ? `primary` : `white`}
                  >
                    Properties
                  </Text>
                </Link>
                <Link
                  className={styles.navLink}
                  to='/contact'
                  onClick={handleCloseNavBar}
                >
                  <Text color={activeRoute(`/contact`) ? `primary` : `white`}>
                    Contact
                  </Text>
                </Link>
                <LinkButton
                  text={`Book now`}
                  width={`113px`}
                  height={`40px`}
                  to={`/book-now`}
                />
              </div>
              <Select
                onChange={changeCurrency}
                border={`none`}
                w={`fit-content`}
                color={`white`}
                size='xs'
              >
                <option
                  style={{ color: `black`, fontWeight: `bold` }}
                  value='NGN'
                >
                  NGN
                </option>
                <option
                  style={{ color: `black`, fontWeight: `bold` }}
                  value='GBP'
                >
                  GBP
                </option>
                <option
                  style={{ color: `black`, fontWeight: `bold` }}
                  value='USD'
                >
                  USD
                </option>
              </Select>
            </div>
          }
        </div>
      </Container>
    </nav>
  )
}

NavBar.propTypes = {
  children: PropTypes.node,
  transparentBg: PropTypes.bool,
}

export default NavBar
