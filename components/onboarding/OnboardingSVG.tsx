import * as React from 'react'
import CalendarSVG from '../../assets/images/calendar.svg'
import AppDevelopmentSVG from '../../assets/images/app-development.svg'
import IllustrationSVG from '../../assets/images/illustration.svg'
import SocialMediaSVG from '../../assets/images/social-media.svg'
import InvoiceSentSVG from '../../assets/images/invoice-sent.svg'

export type IconObject = {
  name: string
  height: number
  width: number
}

const OnboardingSVG: React.FC<IconObject> = ({ name, height, width }) => {
  switch (name) {
    case 'Calendar':
      return <CalendarSVG height={height} width={width} />
    case 'AppDevelopment':
      return <AppDevelopmentSVG height={height} width={width} />
    case 'Illustration':
      return <IllustrationSVG height={height} width={width} />
    case 'SocialMedia':
      return <SocialMediaSVG height={height} width={width} />
    case 'InvoiceSent':
      return <InvoiceSentSVG height={height} width={width} />
    default:
      return null
  }
}

export default OnboardingSVG
