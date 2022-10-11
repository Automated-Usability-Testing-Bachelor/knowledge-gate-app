import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Pill from '../Pill'
import Colors from '../../constants/Colors'

const Skills = ({ skills }: any) => (
  <>
    <View style={styles.headerContainer}>
      <Text style={styles.header}>{'Skills'}</Text>
    </View>
    <View style={styles.skillsContainer}>
      {skills.map((element: any) => (
        <Pill
          borderColor="rgba(0, 27, 114, 0.7)"
          fontColor={Colors.blue.color}
          text={element}
          key={element}
        />
      ))}
    </View>
  </>
)

const styles = StyleSheet.create({
  headerContainer: {
    paddingBottom: 5
  },
  header: {
    fontSize: 16,
    fontFamily: 'Serif-Medium',
    color: Colors.blue.color
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    alignContent: 'flex-start'
  },
  skillsList: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})

export default Skills
