import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const useScrollToSection = () => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const hash = location.hash

    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 1000)
    }
  }, [location])

  return {
    scrollToSection: (page, sectionId) => navigate(`/${page}#${sectionId}`),
  }
}
