// REACT DEFAULTS
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

// COMPONENTS
import Container from '../Container'
import { VscMenu, VscClose } from 'react-icons/vsc'

// STYLES
import styles from './NavBar.module.scss'
import LinkButton from '../../components/buttons/link-button/LinkButton'
import { Text } from '@chakra-ui/react'

const NavBar = ({ children, transparentBg }) => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [windowPosition, setWindowPosition] = useState(0)
  const location = useLocation()
  const routePath = useLocation()

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
    if (isNavOpen) {
      window.document.body.style.overflowY = 'hidden'
    } else {
      window.document.body.style.overflowY = 'scroll'
    }
  }, [isNavOpen, windowPosition])

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    scrollToTop()
  }, [routePath])

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
              <img
                className={styles.navLogo}
                src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1680856120/project-yemsays/Group_87_qudnxl.png`}
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
                  color={activeRoute(`/`) ? `primary` : `white`}
                >
                  <Text>Home</Text>
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
                {children}
              </div>

              {/* <div className={styles.navItems}>
                <Button
                  onClick={handleCloseNavBar}
                  linkHref={'/login'}
                  navBtn={true}
                  solidBtn={false}
                  linkText={'LOGIN'}
                />

                <Button
                  onClick={handleCloseNavBar}
                  linkHref={'/signup'}
                  navBtn={true}
                  solidBtn={true}
                  linkText={'SIGN UP'}
                />
                {children}
              </div> */}
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
