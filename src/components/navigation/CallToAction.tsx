// Components
import NextLink from 'next/link'
// Types
import { Themeable } from '../../types/theme'
// Styles
import styles from '../../styles/navigation/CallToAction.module.css'

/**
 * The primary call to actions of the application
 * @see {@link Themeable} for props specification
 * @param Themeable The component props
 * @returns The CallToAction component
 */
const CallToAction = ({ theme = 'primary' }: Themeable) => {
  const themeStyle = theme === 'secondary' ? styles.actionSecondary : ''
  const actionStyle = `${styles.action} ${themeStyle}`

  return (
    <NextLink href='/contact'>
      <div className={actionStyle}>
        <div className={styles.content}>
          CONTÁCTANOS
        </div>
      </div>
    </NextLink>
  )
}

export default CallToAction
