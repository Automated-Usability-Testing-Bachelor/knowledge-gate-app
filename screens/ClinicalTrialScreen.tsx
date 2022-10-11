import { RouteProp } from '@react-navigation/native'
import React from 'react'
import Background from '../components/BackgroundTemplate'
import BodyView from '../components/clinicalTrialScreen/BodyView'

export type Item = {
  status: string
  publishDate: string
  title: string
  conditions: string
  interventions: string
  locations: string
  link: string
}

type Props = {
  route: RouteProp<{ params: { item: Item } }, 'params'>
}

const ClinicalTrialScreen: React.FC<Props> = ({ route }) => {
  const { item } = route.params

  return (
    <Background
      body={BodyView({
        status: item.status,
        publishDate: item.publishDate,
        title: item.title,
        conditions: item.conditions,
        interventions: item.interventions,
        locations: item.locations,
        link: item.link
      })}
    />
  )
}

export default ClinicalTrialScreen
