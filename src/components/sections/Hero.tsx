// Components
import CallToAction from '../navigation/CallToAction'
import Image from 'next/image'
import Link from '../navigation/Link'
// Styles
import styles from '../../styles/sections/Hero.module.css'

/**
* The home page hero section component
* @returns The Hero component
*/
const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.heading}>
            The <span>Spot</span> where <span>Key Performance</span> takes place
          </h1>
          <p className={styles.description}>
            Potenciamos el factor humano de las empresas con visión,
            a fin de evolucionar hacia un legado de progreso y verdad.
          </p>
        </header>
        <div className={styles.options}>
          <CallToAction />
          <div>
            <Link href='/#solutions'>
              SOLUCIONES
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.image}>
        <Image
          src='/images/sections/home-hero.png'
          alt='Keyperspot'
          width={837}
          height={768}
        />
      </div>
    </section>
  )
}

export default Hero
