// Components
import About from '../components/sections/About'
import Footer from '../components/sections/Footer'
import SmoothLayout from '../components/layout/SmoothLayout'
import CallToAction from '../components/navigation/CallToAction'
import Link from '../components/navigation/Link'
import Image from 'next/image'
// Types
import { AboutProps } from '../types/sections'
// Styles
import styles from '../styles/pages/HomePage.module.css'

/** About section configuration */
const aboutConfig: AboutProps = {
  id: 'services',
  link: '/services',
  description: 'Impulsamos empresas con visión, a fin de crear un legado de progreso y verdad.',
  showcases: [
    {
      heading: 'Marketing',
      descriptions: ['Impulsamos a las marcas a la dirección adecuada. Creamos lazos de alianza con negocios cuyo objetivo es crecer: aquellos que buscan un cambio para progresar. Ayudamos a recuperar presencia en los medios, a lograr sus metas y a asegurar un crecimiento exponencial. ¡Y solo es el comienzo!'],
      image: 'marketing'
    },
    {
      heading: 'Branding',
      descriptions: ['Construimos marcas sobresalientes, creamos el ADN de marca y desarrollamos sistemas funcionales de comunicación visual. Le damos forma al carácter de tu marca, una imagen atractiva y una identidad única. Además, renovamos marcas existentes.'],
      image: 'branding'
    },
    {
      heading: 'Development',
      descriptions: ['Creemos que una página web le da cuerpo a la identidad de tu marca. Es por eso que desarrollamos sistemas responsivos con un propósito más grande que solo informar. Buscamos crear sitios web que sean reactivos al cambio, que generen una experiencia positiva y que muevan tus emociones.'],
      image: 'development'
    },
    {
      heading: 'Design',
      descriptions: ['No es tan simple con solo tener un logo. Para ser distinguido, es necesario establecer algunos parámetros que se usen siempre: un concepto de diseño. Definimos elementos visuales, colores y tipografía. Creamos presentaciones visuales únicas y consistentes para marcas sobresalientes.'],
      image: 'design'
    }
  ]
}

/**
 * The main page of the application
 * @returns HomePage component
 */
const HomePage = () => {
  return (
    <SmoothLayout>
      <main>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <header className={styles.heroHeader}>
              <h1 className={styles.heroHeading}>
                The place where <span>Key Performance</span> happens
              </h1>
              <p className={styles.heroDescription}>
                Potenciamos el factor humano de las empresas con visión,
                a fin de evolucionar hacia un legado de progreso y verdad.
              </p>
            </header>
            <div className={styles.heroOptions}>
              <CallToAction />
              <div>
                <Link href='/about'>
                  CONOCENOS
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.heroImageWrap}>
            <Image
              alt='emah marketing solutions'
              src='/images/sections/hero.jpg'
              width={640}
              height={640}
              className={styles.heroImage}
            />
          </div>
        </section>
        <About {...aboutConfig} />
      </main>
      <Footer />
    </SmoothLayout>
  )
}

export default HomePage
