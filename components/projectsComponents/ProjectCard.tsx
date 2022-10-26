import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import Colors from '../../constants/Colors'
import projectData from '../../data/ProjectsData.json'

const styles = StyleSheet.create({
  container: {
    height: '100%'
  },
  ProjectCardContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    dropShadow: 25,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    // backgroundColor: Colors.offWhite.color,
    pressable: true,
    height: 100,
    borderColor: 'rgba(0, 27, 114, 0.3)',
    borderWidth: 1
  },
  title: {
    fontSize: 14,
    color: Colors.blue.color,
    fontFamily: 'Sans-Medium'
  },
  description: {
    fontSize: 12,
    fontFamily: 'Sans-Regular',
    marginVertical: 10,
    color: Colors.black.color
  }
})

const ProjectCard = ({ item, onPress }: any) => (
  <TouchableOpacity style={styles.ProjectCardContainer} onPress={onPress}>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.description} numberOfLines={3}>
      {item.description}
    </Text>
  </TouchableOpacity>
)

const Projects = () => {
  const navigation = useNavigation()
  const renderItem = ({ item }: any) => {
    return (
      <ProjectCard
        item={item}
        onPress={() => {
          navigation.navigate('ProjectsExpanded', { item })
        }}
      />
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={projectData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default Projects
