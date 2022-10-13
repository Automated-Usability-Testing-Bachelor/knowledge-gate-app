import React from 'react'
import { ImageSourcePropType, ScrollView } from 'react-native'
import BackgroundTemplate from '../components/BackgroundTemplate'
import ProfileHeader from '../components/profileComponents/ProfileHeader'
import ProfileBody from '../components/profileComponents/ProfileBody'
import Colors from '../constants/Colors'
import profileData from '../data/profileData.json'

export type ProfileData = {
  name: string
  age?: number
  company?: string
  profession?: string
  about?: string
  skills: string[]
  experiences: Experience[]
  extraInfo: ExtraInfo[]
}

export type Experience = {
  company: string
  title: string
  length: string
  range: string
}

export type ExtraInfo = {
  publications: string
  clinicalTrials: string
  murders: string
}

const ProfileScreen = () => {
  console.log(profileData)
  return (
    <ScrollView style={{ backgroundColor: Colors.warmGrey.color }}>
      <BackgroundTemplate
        header={ProfileHeader({ profileInfo: profileData })}
        body={ProfileBody({ profileInfo: profileData })}
      />
    </ScrollView>
  )
}

export default ProfileScreen
