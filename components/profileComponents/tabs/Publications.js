import React from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Colors from '../../../constants/Colors'
import PublicationsData from '../../../data/PublicationsData.json'
import NoAvailability from '../../NoDataComponents/NoAvailabilities'

const Publication = ({ item }) => {
  const navigation = useNavigation()
  const onPressPub = () => {
    navigation.navigate('PublicationScreen', { item })
  }

  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity onPress={onPressPub}>
        <View style={styles.DateContainer}>
          <Text style={styles.publishDateText}>
            {`Published: ${item.publishDate}`}
          </Text>
        </View>
        <View>
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.TitleText}>{item.title}</Text>
          </View>
          <View>
            <Text numberOfLines={3} style={styles.BodyText}>
              {item.body}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const Publications = () => {
  return (
    <View>
      <FlatList
        data={PublicationsData}
        keyExtractor={(item) => item.id}
        initialNumToRender={5}
        ListEmptyComponent={
          <View>
            <NoAvailability />
          </View>
        }
        renderItem={({ item }) => <Publication item={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.offWhite.color,
    marginBottom: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5
  },
  publishDateText: {
    fontFamily: 'Sans-Medium',
    color: Colors.darkGrey.color,
    fontSize: 10
  },
  DateContainer: {
    marginBottom: 10
  },
  TitleText: {
    fontFamily: 'Serif-SemiBold',
    fontSize: 14,
    color: Colors.black.color
  },
  BodyText: {
    fontFamily: 'Sans-Light',
    fontSize: 12,
    color: Colors.black.color
  }
})

export default Publications
