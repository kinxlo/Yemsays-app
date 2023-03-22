// REACT DEFAULTS
import { PropTypes } from 'prop-types'

// STYLES
import styles from './Container.module.scss'
import { useState, useEffect } from 'react'

const Container = ({ paddingBlock, children }) => {
  const [padding, setPadding] = useState('')

  useEffect(() => {
    setPadding(() => `${paddingBlock}rem`)
  }, [paddingBlock])

  return (
    <div
      className={styles.container}
      style={{
        paddingBlock: padding ? padding : '2.5rem',
      }}
    >
      {children}
    </div>
  )
}

// Container.defaultProps = {
//   paddingBlock: '2.5rem',
// }

Container.propTypes = {
  paddingBlock: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
}

export default Container
