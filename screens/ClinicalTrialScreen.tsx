import React from 'react'
import Background from '../components/BackgroundTemplate'
import BodyView from '../components/clinicalTrialScreen/BodyView'

const ClinicalTrialScreen = (props: any) => {
  const { item } = props.route.params

  return <Background body={BodyView({ item })} />
}

export default ClinicalTrialScreen
