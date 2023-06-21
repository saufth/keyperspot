// Types
import { LinkProps } from '../../../types/navigation'

/** The main navigation configuration */
export const navigationConfig: LinkProps[] = [
  {
    children: 'Inicio',
    href: '/'
  },
  {
    children: 'Soluciones',
    href: '/#solutions'
  },
  {
    children: 'Estrategia',
    href: '/#strategy'
  },
  {
    children: 'Razón de ser',
    href: '/why'
  }
]

/** The main call to action configuration */
export const callToActionConfig: LinkProps = {
  children: 'Contáctanos',
  href: '/contact'
}
