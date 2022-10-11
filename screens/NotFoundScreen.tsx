import React from 'react'
import BackgroundTemplate from '../components/BackgroundTemplate'
import testComponent from '../components/TestComponent'

const NotFoundScreen = () => {
  return <BackgroundTemplate body={testComponent()} />
}

export default NotFoundScreen
