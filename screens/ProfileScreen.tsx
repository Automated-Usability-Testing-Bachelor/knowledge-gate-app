import React from 'react'
import { ScrollView, Text } from 'react-native'
import BackgroundTemplate from '../components/BackgroundTemplate'
// eslint-disable-next-line import/no-cycle
import ProfileHeader from '../components/profileComponents/ProfileHeader'
import ProfileBody from '../components/profileComponents/ProfileBody'
import Colors from '../constants/Colors'
import profileData from '../src/ProfileData.json'
import {
  GetViewerDocument,
  GetViewerQuery,
  useGetViewerQuery,
} from '../src/@generated/graphql'

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
  const {
    data: profileDataQuery,
    loading: profileLoading,
    error: profileError,
  } = useGetViewerQuery()

  if (profileLoading) return <Text>{'Loading'}</Text>

  if (profileError) return <Text>{'Error'}</Text>

  const profileDataViewer = profileDataQuery?.viewer

  return (
    <ScrollView style={{ backgroundColor: Colors.warmGrey.color }}>
      <BackgroundTemplate
        header={<ProfileHeader {...profileData} />}
        body={<ProfileBody {...profileData} />}
      />
      <Text>{profileDataViewer?.name}</Text>
    </ScrollView>
  )
}

export default ProfileScreen
