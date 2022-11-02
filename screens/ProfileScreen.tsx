import React from 'react'
import { ScrollView } from 'react-native'
import BackgroundTemplate from '../components/BackgroundTemplate'
// eslint-disable-next-line import/no-cycle
import ProfileHeader from '../components/profileComponents/ProfileHeader'
import ProfileBody from '../components/profileComponents/ProfileBody'
import Colors from '../constants/Colors'
import profileData from '../data/ProfileData.json'

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
  return (
    <ScrollView style={{ backgroundColor: Colors.warmGrey.color }}>
      <BackgroundTemplate
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        header={ProfileHeader({ profileInfo: profileData })}
        body={ProfileBody({ profileInfo: profileData })}
      />
    </ScrollView>
  )
}

export default ProfileScreen
