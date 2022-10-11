import React from 'react'
import Background from '../components/BackgroundTemplate'
import BodyView from '../components/clinicalTrialScreen/BodyView'

const ClinicalTrialScreen = (props) => {
  /*   const { item } = props.route.params
   */ const items = props.route.params.item

  return (
    <Background
      body={BodyView({
        conditions: items.conditions,
        interventions: items.conditions
      })}
    />
  )
}

export default ClinicalTrialScreen
