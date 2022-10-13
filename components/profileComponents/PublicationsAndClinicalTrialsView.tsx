import React, { ReactElement, useCallback, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Publications from './tabs/Publications'
import PubClinButtonGroup from './PubClinButtonGroup'
import Colors from '../../constants/Colors'
import ClinicalTrials from './tabs/ClinicalTrials'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  },
  tabBarItemStyle: {
    alignItems: 'center',
    borderRadius: 10,
    paddingBottom: 5,
    marginRight: 5,
    marginLeft: 5,
    height: 55
  },
  tabBarStyle: {
    paddingVertical: 5,
    borderRadius: 15,
    backgroundColor: '#001B72',
    position: 'absolute',
    height: 65,
    left: 3,
    right: 3,
    bottom: 20
  },
  tabBarLabelStyle: {
    fontSize: 9
  },
  listContainer: {
    padding: 10,
    backgroundColor: Colors.warmGrey.color,
    paddingBottom: 90
  }
})

const PublicationsAndClinicalTrialsView = () => {
  const [currentSubject, setCurrentSubject] = useState<
    ReactElement | undefined
  >(undefined)
  const selectedSubject = useCallback((subject: string) => {
    if (subject === 'pub') {
      setCurrentSubject(<Publications />)
    } else if (subject === 'clin') {
      setCurrentSubject(<ClinicalTrials />)
    } else {
      setCurrentSubject(<Text>{'fail'}</Text>)
    }
  }, [])

  return (
    <View>
      <PubClinButtonGroup selectedSubjectCallback={selectedSubject} />
      <View style={styles.listContainer}>{currentSubject}</View>
    </View>
  )
}

export default PublicationsAndClinicalTrialsView
