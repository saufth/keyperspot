// Components
import NextLink from 'next/link'
// Styles
import styles from '../../styles/navigation/CallToAction.module.css'

/**
 * The primary call to actions of the application
 * @returns The CallToAction component
 */
const CallToAction = () => {
  return (
    <NextLink href='/contact'>
      <div className={styles.action}>
        <div className={styles.content}>
          CONTÁCTANOS
        </div>
      </div>
    </NextLink>
  )
}

export default CallToAction
