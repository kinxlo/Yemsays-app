import { useState, useEffect, useRef } from 'react'

const useScrollTrigger = () => {
  const [isInViewport, setIsInViewport] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const { top, bottom } = ref.current.getBoundingClientRect()
      setIsInViewport(top >= 0 && bottom <= window.innerHeight)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return [ref, isInViewport]
}

export default useScrollTrigger
