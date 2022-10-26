import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
  projectsExpandedContainer: {
    flex: 1,
    padding: 10,
    margin: 10,
    height: '100%'
  },
  projectsExpandedText: {
    marginTop: 5,
    marginBottom: 5
  },
  title: {
    fontSize: 16,
    fontFamily: 'Sans-Medium',
    color: Colors.blue.color,
    marginBottom: 5
  },
  description: {
    fontSize: 14,
    fontFamily: 'Sans-Regular'
  }
})

const ProjectExpanded = ({ item }: Item) => (
  <ScrollView style={styles.projectsExpandedContainer}>
    <View style={styles.projectsExpandedText}>
      <Text style={styles.title}>{'Industry'}</Text>
      <Text style={styles.description}>{item.industry}</Text>
    </View>
    <View style={styles.projectsExpandedText}>
      <Text style={styles.title}>{'Goals'}</Text>
      <Text style={styles.description}>{item.goals}</Text>
    </View>
    <View style={styles.projectsExpandedText}>
      <Text style={styles.title}>{'Description'}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
    <View style={styles.projectsExpandedText}>
      <Text style={styles.title}>{'Questions'}</Text>
      <Text style={styles.description}>{item.questions}</Text>
    </View>
  </ScrollView>
)

export type Item = {
  item: {
    id: number
    industry: string
    goals: string
    description: string
    questions: string
  }
}

const Projects = ({ item }: Item) => (
  <ProjectExpanded item={item} keyExtractor={({ item }: Item) => item.id} />
)

export default Projects
