// Types
import { Actionable } from './input'

/** Link component props */
export interface LinkProps {
  /** Link text */
  children: string
  /** Reference to redirect */
  href: string
}

/** Nav component props */
export interface NavProps {
  /**
   * Set the CallToAction component instead of the contact link,
   * is commonly used for the navbar
   */
  primary?: boolean
}

/** Menu component props */
export interface MenuProps extends Actionable {
  /** Menu status */
  isOpen: boolean
}
