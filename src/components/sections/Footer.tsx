// Components
import CallToAction from '../navigation/CallToAction'
import Image from 'next/image'
import NextLink from 'next/link'
// Styles
import styles from '../../styles/sections/Footer.module.css'

/**
 * The footer section of application
 * @returns Footer section component
 */
const Footer = () => {
  return (
    <footer className={styles.section}>
      <div className={styles.foot}>
        <div className={styles.footMail}>
          <NextLink href='mailto:info@keyperspot.com' target='_blank' rel='noreferrer'>
            info@keyperspot.com
          </NextLink>
        </div>
        <div className={styles.footAction}>
          <CallToAction />
        </div>
        <div className={styles.rights}>
          <NextLink href='/'>
            <Image
              src='/images/logo-vertical.svg'
              alt='Keyperspot logotype'
              width={175}
              height={32}
            />
          </NextLink>
          Copyright 2023 Keyperspot. All rights reserved.
        </div>
      </div>
      <nav className={styles.nav}>
        <NextLink href='/'>Inicio</NextLink>
        <NextLink href='/#solutions'>Soluciones</NextLink>
        <NextLink href='/#strategy'>Estrategía</NextLink>
        <NextLink href='/#problematic'>Problemática</NextLink>
        <NextLink href='/contact'>Contacto</NextLink>
      </nav>
    </footer>
  )
}

export default Footer
