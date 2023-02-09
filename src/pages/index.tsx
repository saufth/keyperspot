// Components
import About from '../components/sections/About'
import CallToAction from '../components/navigation/CallToAction'
import Link from '../components/navigation/Link'
import Image from 'next/image'
// Types
import { AboutProps } from '../types/sections'
// Styles
import styles from '../styles/pages/HomePage.module.css'

/** The solutions of the organization configuration */
const solutionsConfig = [
  {
    text: 'Planeación estratégica para RR.HH.',
    icon: 'dialog'
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
    text: 'Expedientes de laborales',
    icon: 'folder'
  },
  {
    text: 'Estudios socioeconómicos',
    icon: 'charts'
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
    text: 'Trámite jurídico de terminaciones laborales',
    icon: 'list'
  },
  {
    text: 'Implementación de KPI+OKR+BSC',
    icon: 'results'
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
  },
  {
    text: 'Branding para trabajadores',
    icon: 'user'
  }
]

/** About page configuration */
const strategy: AboutProps = {
  id: 'strategy',
  heading: 'La estrategía',
  description: 'El éxito a corto, mediano y largo plazo de cualquier empresa no depende de un solo aspecto, sino de la sincronización de muchos. Aquí te presentamos los más importantes para nosotros, mismos que forman parte de nuestro ADN y que son la clave en la generación de soluciones de valor para nuestros clientes.',
  showcases: [
    {
      heading: 'Trabajamos en equipo',
      descriptions: [
        'Filosofía: Los negocios son opuestos a las matemáticas. Mientras las matemáticas plantean que la mejor forma de sumar es multiplicar, en los negocios la mejor forma de sumar es dividir. Dividir el esfuerzo, el trabajo, las tareas y hasta los ingresos.',
        'Más allá de querer ser un experto en todas las áreas de una empresa o negocio, busca rodearte de un equipo de expertos que complemente correctamente las habilidades y conocimientos que no tienes.'
      ],
      image: 'about-team'
    },
    {
      heading: 'Innovamos constantemente',
      descriptions: [
        'Lo importante es generar innovación alrededor de lo que el cliente considera valioso.',
        'Para lograr generar innovaciones de valor, es imperativo conocer al cliente, a la competencia, al mercado y a ti mismo como organización.'
      ],
      image: 'about-innovate'
    },
    {
      heading: 'Transformamos problemas en oportunidades',
      descriptions: [
        'Problemas = áreas de oportunidad.',
        'Mientras más grande y frecuente sea el problema, mayor será la posibilidad de generar valor.',
        'La creatividad es un elemento clave en nuestro proceso de encontrar soluciones.'
      ],
      image: 'about-oportunity'
    },
    {
      heading: 'No asumimos',
      descriptions: [
        'Se debe tener certeza en cada tarea u objetivo a realizar. Nunca asumir, en caso no tener una certeza plena.',
        'Evitar el retrabajo. Dar indicaciones claras incrementa las probabilidades de que las cosas se hagan bien y a la primera.',
        'El estudio de mercado estratégico es un pilar indispensable en el momento de tomar decisiones que generen valor para el cliente.'
      ],
      image: 'about-assume'
    },
    {
      heading: 'Planeamos y ejecutamos con estrategia',
      descriptions: [
        'Se debe analizar y elegir con mucho cuidado la mejor forma de llegar del punto A (en donde estamos) al punto B (a donde se quiere llegar).',
        'Administrar con eficiencia los recursos disponibles.',
        'Siempre hay una forma óptima o mejor de hacer las cosas.',
        'El minimalismo y la metodología MVP son claves dentro de nuestra estrategia.'
      ],
      image: 'about-strategy'
    },
    {
      heading: 'Prevemos futuras tendencias',
      descriptions: [
        'Saber cuándo entrar y salir de cualquier oportunidad de negocio. Nada es eterno; todo tiene un ciclo, un punto alto y un punto bajo.',
        'Lo único constante es el cambio. Sé tú quien decida los cambios en tu empresa, y no el mercado el que te obligue a hacerlos.'
      ],
      image: 'about-prevent'
    },
    {
      heading: 'Buscamos progreso, no perfección',
      descriptions: [
        'El mundo de los negocios es un juego infinito en el que no se tiene una certeza plena de todos los elementos que participan el mercado, ni de la variabilidad de estos.  A lo máximo que se puede aspirar es a tener estimaciones.',
        '¿Qué sí está en nuestro control? Generar una cultura de progreso constante dentro de nuestra organización; aspirar a ser mejores cada día con relación a nuestras propias métricas e inspirar el cambio en esta cultura de progreso en cada rincón de la compañía.'
      ],
      image: 'about-progress'
    }
  ]
}

/**
 * The main page of the application
 * @returns HomePage component
 */
const HomePage = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <header className={styles.heroHeader}>
            <h1 className={styles.heroHeading}>
              The <span>Spot</span> where <span>Key Performance</span> takes place
            </h1>
            <p className={styles.heroDescription}>
              Potenciamos el factor humano de las empresas con visión,
              a fin de evolucionar hacia un legado de progreso y verdad.
            </p>
          </header>
          <div className={styles.heroOptions}>
            <CallToAction theme='secondary' />
            <div>
              <Link href='/#solutions'>
                SOLUCIONES
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.heroImageWrap}>
          <Image
            src='/images/sections/home-hero.png'
            alt='Keyperspot'
            width={837}
            height={768}
          />
        </div>
      </section>
      <section id='solutions' className='-mt-12 md:mt-0 bg-gradient-to-br from-secondary to-primary'>
        <div className='max-w-9xl px-5% py-24 mx-auto space-y-24 text-white'>
          <header className='space-y-8 text-center'>
            <h2>
              Nuestras soluciones
            </h2>
            <p>
              Nuestro principal objetivo es convertirnos en un aliado estratégico y determinante
              en el éxito presente y futuro de nuestros clientes. Nos apasiona generar valor en sus
              modelos de negocio para que, día con día, se vuelvan más competitivos.
            </p>
          </header>
          <div className='md:pr-0 flex flex-col md:flex-row items-stretch'>
            <div className='md:w-9/20'>
              <ul className='space-y-6 first:pt-6 first:border-t'>
                {solutionsConfig.map((service, key) => (
                  <li className='pb-6 flex items-center gap-x-5 font-neue-medium md:text-lg border-b border-white' key={key}>
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
            </div>
            <div className='w-full md:w-11/20 flex flex-col items-center justify-center gap-y-24'>
              <Image
                src='/images/sections/home-solutions.png'
                alt='Keyperspot solutions'
                width={582}
                height={768}
              />
              <CallToAction theme='secondary' />
            </div>
          </div>
          <p className='md:px-5% text-center'>
            Constantemente salimos de la zona de confort que impone el mercado, con el único
            objetivo de que nuestros clientes logren alcanzar su máximo potencial. Date la
            oportunidad de conocernos. Te sorprenderás.
          </p>
        </div>
      </section>
      <About {...strategy} />
      <div className={styles.quote}>
        <div className={styles.quoteWrap}>
          <div className={styles.phrase}>
            “Puedes tener la mejor estrategia y el mejor edificio del mundo, pero si no cuentas
            con el corazón y la mente de las personas que trabajan contigo, nada tomará vida ”.
          </div>
          <div className={styles.author}>
            Renee West
          </div>
          <div className={styles.legend}>
            Exvicepresidente de Recursos Humanos de la empresa Primm Valley Resorts,
            presidente y COO de Luxor y Hotel Excalibur.
          </div>
          <div className={styles.quoteAction}>
            <CallToAction theme='secondary' />
          </div>
        </div>
      </div>
      <section id='problematic' className={styles.problematic}>
        <h2>
          Problemáticas actuales
        </h2>
        <ul className={styles.problematicList}>
          <li>Reclutar a la persona correcta</li>
          <li>Tratar o lidiar con empleados negativos</li>
          <li>Resolución de problemas internos en el área de trabajo</li>
          <li>Motivar a los trabajadores para dar lo mejor de ellos</li>
          <li>
            Atraer y retener a los mejores talentos
            <ul className={styles.problematicSublist}>
              <li>Crear un branding digital enfocado para los empleados</li>
              <li>Agilizar e innovar en los procesos de reclutamiento y selección</li>
              <li>Invertir en el desarrollo de liderazgo</li>
            </ul>
          </li>
          <li>Diversidad, equidad e inclusión</li>
          <li>
            Branding de los trabajadores
            <ul className={styles.problematicSublist}>
              <li>Administrar y mejorar tu reputación ante aquellos que están buscando empleado o aquellos interesados de mayor relevancia.</li>
              <li>Un buen Branding laboral debe contestar claramente la pregunta ¿Qué es lo que los trabajadores realmente piensas de tu empresa, que es lo que le cuentan o dicen a sus amigos y familiares acerca de tu empresa cuando tu no estas cerca?</li>
            </ul>
          </li>
          <li>
            Alinear el talento (los trabajadores) y el negocio
            <ul className={styles.problematicSublist}>
              <li>Maximizar y medir el talento de los trabajadores</li>
            </ul>
          </li>
          <li>Cuidar el bienestar de los trabajadores en todos los sentidos.</li>
          <li>Atraer talentos a través del propósito de la empresa, el propósito de la empresa y de los trabajadores debe estar alineado.</li>
          <li>
            Inclusión laboral
            <ul className={styles.problematicSublist}>
              <li>Onboarding</li>
              <li>Desarrollo de liderazgo</li>
              <li>Asensos</li>
              <li>Aumentos, bonos, beneficios, etc</li>
            </ul>
          </li>
          <li>Trabajadores operativos (sin escritorio) vs. Trabajadores de escritorio (posibilidad de home office)</li>
          <li>
            Transformar/evolucionar el aprendizaje y capacitación a los trabajadores.
            <ul className={styles.problematicSublist}>
              <li>Desarrollo de habilidades técnicas especificas</li>
              <li>Automatización</li>
              <li>Inteligencia artificial</li>
              <li>Inteligencia de negocios</li>
              <li>Habilidades de comunicación</li>
              <li>Administración del tiempo</li>
              <li>Pensamiento Critico</li>
            </ul>
          </li>
          <li>Redefinir el lugar de trabajo para los empleados como ventaja competitiva para el reclutamiento y selección.</li>
          <li>Administración del ecosistema laboral (trabajadores directos, contratistas independientes, freelancers y cualquier tipo trabajadores externo a la organización). Ejemplo: la empresa de cosméticos de Rihanna subcontratando empleados menores de edad en india.</li>
          <li>Recursos humanos forma parte del Metaverso. Básicamente consiste en vivir el proceso de RH en el metaverso, abre posibilidades para los empleados con discapacidad, por ejemplo.</li>
          <li>
            El nacimiento del uso de los algoritmos en RH.
            <ul className={styles.problematicSublist}>
              <li>Los procesos de RH se empiezan a llevar a cabo con IA.</li>
            </ul>
          </li>
          <li>Los trabajadores confían mas en sus empresas, en sus empleadores que en el gobierno (estadísticamente), esto pone un gran peso y responsabilidad en el manejo y administración del recurso humano. El responsable del área de RH se vuelve un asesor importante para el CEO de las empresas.</li>
          <li>Desarrollo de lideres, gerentes y directores.</li>
        </ul>
      </section>
    </>
  )
}

export default HomePage
