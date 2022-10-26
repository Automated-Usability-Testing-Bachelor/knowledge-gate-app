import { RouteProp } from '@react-navigation/native'
import React from 'react'
import BackgroundNoTab from '../components/BackgroundTemplateNoTab'
import BodyView from '../components/publicationScreen/BodyView'

export type Item = {
  publishDate: string
  body: string
  link: string
  title: string
}

type Props = {
  route: RouteProp<{ params: { item: Item } }, 'params'>
}

const PublicationScreen: React.FC<Props> = ({ route }) => {
  const item = route.params

  return (
    <BackgroundNoTab
      body={BodyView({
        publishDate: item.publishDate,
        body: item.body,
        link: item.link,
        title: item.title
      })}
    />
  )
}

export default PublicationScreen
