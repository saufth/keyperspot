// Components
import CallToAction from '../navigation/CallToAction'
import Image from 'next/image'
// Styles
import styles from '../../styles/sections/Solutions.module.css'

/** The solutions of the organization configuration */
const solutionsConfig = [
  {
    text: 'Planeación estratégica para RR.HH.',
    icon: 'dialog'
  },
  {
    text: 'Branding para trabajadores',
    icon: 'user'
  },
  {
    text: 'Implementación de KPI+OKR+BSC',
    icon: 'results'
  },
  {
    text: 'Reclutamiento y selección de personal',
    icon: 'choice'
  },
  {
    text: 'Pruebas de polígrafo y psicométricas',
    icon: 'test'
  },
  {
    text: 'Estudios socioeconómicos',
    icon: 'charts'
  },
  {
    text: 'Trámite jurídico para contratación y terminación laboral',
    icon: 'list'
  },
  {
    text: 'Generación y resguardo de expedientes laborales',
    icon: 'folder'
  },
  {
    text: 'Negociación de liquidaciones',
    icon: 'discussion'
  },
  {
    text: 'Cálculo de finiquitos y liquidaciones',
    icon: 'scale'
  },
  {
    text: 'Monitoreo de la salud física y psicológica de los trabajadores',
    icon: 'healthy'
  },
  {
    text: 'Cursos de capacitación para el desarrollo personal y profesional de los trabajadores',
    icon: 'rocket'
  },
  {
    text: 'Planes para el retiro o jubilación de los colaboradores',
    icon: 'pointers'
  },
  {
    text: 'Implementación de software especializado en RR.HH.',
    icon: 'software'
  }
]

/**
* The solutions section component
* @returns The Solutions component
*/
const Solutions = () => {
  return (
    <section id='solutions' className={styles.solutions}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2>
            Nuestras soluciones
          </h2>
          <p>
            Nuestro principal objetivo es convertirnos en un aliado estratégico y determinante
            en el éxito presente y futuro de nuestros clientes. Nos apasiona generar valor en sus
            modelos de negocio para que, día con día, se vuelvan más competitivos.
          </p>
        </header>
        <div className={styles.content}>
          <ul className={styles.list}>
            {solutionsConfig.map((service, key) => (
              <li className={styles.listItem} key={key}>
                <Image
                  src={`/images/icons/${service.icon}.svg`}
                  alt={service.icon}
                  width={36}
                  height={36}
                />
                {service.text}
              </li>
            ))}
          </ul>
          <div className={styles.image}>
            <Image
              src='/images/sections/home-solutions.png'
              alt='Keyperspot solutions'
              width={582}
              height={768}
            />
            <CallToAction theme='secondary' />
          </div>
        </div>
        <p className={styles.legend}>
          Constantemente salimos de la zona de confort que impone el mercado, con el único
          objetivo de que nuestros clientes logren alcanzar su máximo potencial. Date la
          oportunidad de conocernos. Te sorprenderás.
        </p>
      </div>
    </section>
  )
}

export default Solutions
