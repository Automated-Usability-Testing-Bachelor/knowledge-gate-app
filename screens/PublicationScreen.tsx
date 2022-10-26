import { RouteProp } from '@react-navigation/native'
import React from 'react'
import BodyView from '../components/publicationScreen/BodyView'
import BackgroundNoTab from '../components/BackgroundTemplateNoTab'

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
        publishDate: item.item.publishDate,
        body: item.item.body,
        link: item.item.link,
        title: item.item.title
      })}
    />
  )
}

export default PublicationScreen
