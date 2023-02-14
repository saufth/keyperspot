// Components
import CallToAction from './CallToAction'
import Image from 'next/image'
import NextLink from 'next/link'
import Menu from './Menu'
import MenuButton from '../input/MenuButton'
// Animation
import { useCycle } from 'framer-motion'
// Config
import { navigationConfig } from '../../modules/navigation/config'
// Styles
import styles from '../../styles/navigation/Navbar.module.css'

/**
 * The main navbar of application
 * @returns Navbar component
 */
const Navbar = () => {
  // Animation
  const [isOpen, toggle] = useCycle(false, true)
  /** Handle the Menu state */
  const handleToggle = () => { toggle() }
  /** Close the Menu but not open */
  const closeToggle = () => { isOpen && toggle() }

  return (
    <>
      <header className={styles.navbar}>
        <div className={styles.content}>
          <NextLink href={navigationConfig[0].href} onClick={closeToggle}>
            <Image
              src='/images/logo-vertical.svg'
              alt='Keyperspot logotype'
              width={350.5}
              height={64}
              priority
              className={styles.logo}
            />
          </NextLink>

          <NextLink className={styles.link} href={navigationConfig[1].href}>
            {navigationConfig[1].children.toUpperCase()}
          </NextLink>

          <NextLink className={styles.link} href={navigationConfig[2].href}>
            {navigationConfig[2].children.toUpperCase()}
          </NextLink>

          <NextLink className={styles.link} href={navigationConfig[3].href}>
            {navigationConfig[3].children.toUpperCase()}
          </NextLink>

          <div className={styles.action}>
            <CallToAction />
          </div>

          {isOpen
            ? <div className={styles.close} onClick={handleToggle}>X</div>
            : <MenuButton action={handleToggle} />}
        </div>
      </header>
      <Menu isOpen={isOpen} action={handleToggle} />
    </>
  )
}

export default Navbar
