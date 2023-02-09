// Components
import Icon from '../data-display/Icon'
import NextLink from 'next/link'

/**
 * The main social network navigation of application
 * @returns SocialNav component
 */
const SocialNav = () => {
  return (
    <div className='flex gap-x-5 md:gap-x-3 justify-center'>
      <NextLink
        href='https://www.facebook.com/'
        target='_blank'
      >
        <Icon icon='facebook' />
      </NextLink>
      <NextLink
        href='https://instagram.com/'
        target='_blank'
      >
        <Icon icon='instagram' />
      </NextLink>
      <NextLink
        href='https://www.tiktok.com/'
        target='_blank'
      >
        <Icon icon='tiktok' />
      </NextLink>
      <NextLink
        href='https://www.linkedin.com/'
        target='_blank'
      >
        <Icon icon='linkedin' />
      </NextLink>
    </div>
  )
}

export default SocialNav
