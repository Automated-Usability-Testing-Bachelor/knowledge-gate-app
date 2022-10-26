import React from 'react'
import Background from '../components/BackgroundTemplate'
import NotificationCard from '../components/notificationComponents/NotificationCard'

const NotificationScreen: React.FC = () => (
  <Background body={NotificationCard()} />
)

export default NotificationScreen
