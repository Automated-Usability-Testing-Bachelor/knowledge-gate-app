import React from 'react'
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  FlatList
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ChevronRightIcon } from 'react-native-heroicons/solid'
import Colors from '../../constants/Colors'
import NotificationsData from '../../data/NotificationsData.json'

const styles = StyleSheet.create({
  notificationCardContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    dropShadow: 25,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    pressable: true,
    height: 70,
    borderColor: 'rgba(0, 27, 114, 0.3)',
    borderWidth: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  time: {
    fontSize: 12,
    fontFamily: 'Serif-Regular',
    color: 'black',
    width: '20%'
  },
  notificationDescription: {
    fontSize: 16,
    fontFamily: 'Sans-Regular',
    color: Colors.blue.color,
    width: '60%'
  },
  arrow: {
    width: '20%',
    alignItems: 'flex-end'
  }
})
type Props = {
  onPress: () => void
  notificationDescription: string
  time: string
}
const NotificationCard: React.FC<Props> = ({
  notificationDescription,
  time,
  onPress
}) => {
  return (
    <TouchableOpacity
      style={styles.notificationCardContainer}
      onPress={onPress}
    >
      <Text style={styles.time} numberOfLines={3}>
        {time}
      </Text>
      <Text style={styles.notificationDescription}>
        {notificationDescription}
      </Text>
      <View style={styles.arrow}>
        <ChevronRightIcon size={20} fill={Colors.red.color} />
      </View>
    </TouchableOpacity>
  )
}

const Notifications: React.FC = () => {
  const navigation = useNavigation()
  const renderItem = ({ item }: any) => {
    return (
      <NotificationCard
        notificationDescription={item.notificationDescription}
        time={item.time}
        onPress={() => {
          navigation.navigate('ProjectsExpanded', { item })
        }}
      />
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={NotificationsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.projectTitle}
      />
    </View>
  )
}

export default Notifications
