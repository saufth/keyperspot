// Components
import Image from 'next/image'
import NextLink from 'next/link'
import Menu from './Menu'
import MenuButton from '../input/MenuButton'
// React
import { useState } from 'react'
// Animation
import { useCycle, useMotionValueEvent, useScroll } from 'framer-motion'
// Styles
import styles from '../../styles/navigation/Navbar.module.css'
import { LinkProps } from '../../types/navigation'
import CallToAction from './CallToAction'

/** The navigation configuration */
const navOptions: LinkProps[] = [
  {
    children: 'NOSOTROS',
    href: '/about'
  },
  {
    children: 'SERVICIOS',
    href: '/#services'
  },
  {
    children: 'RAZON DE SER',
    href: '/why'
  }
]

/**
 * The main navbar of application
 * @returns Navbar component
 */
const Navbar = () => {
  const [isOnTop, setIsOnTop] = useState(true)
  const { scrollY } = useScroll()
  // Animation
  const [isOpen, toggle] = useCycle(false, true)

  /** Handle the Menu state */
  const handleToggle = () => { toggle() }
  /** Close the Menu but not open */
  const closeToggle = () => { isOpen && toggle() }

  const navbarStyle = `${styles.navbar} ${!isOnTop ? styles.navbarScrolled : ''}`

  useMotionValueEvent(scrollY, 'change', (latestScrollY) => {
    setIsOnTop(latestScrollY < 24)
  })

  return (
    <>
      <header className={navbarStyle}>
        <div className={styles.content}>
          <div>
            <NextLink href='/' onClick={closeToggle}>
              <Image
                src='/images/logo-vertical.svg'
                alt='Keyperspot logotype'
                width={350.5}
                height={64}
                priority
                className={styles.logo}
              />
              <Image
                src='/images/logomark.svg'
                alt='Keyperspot logotype'
                width={64}
                height={64}
                priority
                className={styles.logomark}
              />
            </NextLink>
          </div>

          {navOptions.map((option, key) => {
            return (
              <NextLink className={styles.optionMedium} href={option.href} key={key}>
                {option.children}
              </NextLink>
            )
          })}

          <div className={styles.optionMedium}>
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
