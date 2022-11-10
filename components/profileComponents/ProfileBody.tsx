import { StyleSheet, View } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import AboutText from './AboutText'
import Skills from './Skills'
import Experience from './Experience'
import ExtraInfo from './ExtraInfo'
import { ProfileData } from '../../screens/ProfileScreen'

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 20,
    height: '100%',
  },
  separator: {
    margin: 10,
    borderWidth: 0.5,
    height: 1,
    borderColor: Colors.darkGrey.color,
  },
})

const ProfileBody: React.FC<ProfileData> = ({
  about,
  skills,
  experiences,
  extraInfo,
}) => (
  <View style={styles.contentContainer}>
    <AboutText about={about} />
    <View style={styles.separator} />
    <Skills skills={skills} />
    <View style={styles.separator} />
    <Experience experience={experiences} />
    <View style={styles.separator} />
    <ExtraInfo extra={extraInfo} />
  </View>
)

export default ProfileBody
