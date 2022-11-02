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
import ClinicalTrialsData from '../../../data/ClinicalTrialsData.json'
import NoAvailability from '../../NoDataComponents/NoAvailabilities'
import StatusBadge from '../../StatusBadge'

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderColor: 'rgba(0, 27, 114, 0.3)',
    borderWidth: 1,
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
  },
  badgeContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
})

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const ClinicalTrial = ({ item }) => {
  const navigation = useNavigation()
  const onPressClin = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    navigation.navigate('ClinicalTrialScreen', { item })
  }

  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity onPress={onPressClin}>
        <View style={styles.DateContainer}>
          <Text style={styles.publishDateText}>
            {`Published: ${item.publishDate}`}
          </Text>
        </View>
        <View>
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.TitleText}>{item.title}</Text>
          </View>
          <View style={styles.badgeContainer}>
            <StatusBadge status={item.status} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const ClinicalTrials = () => {
  return (
    <View>
      <FlatList
        data={ClinicalTrialsData}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        keyExtractor={(item) => item.id}
        initialNumToRender={5}
        ListEmptyComponent={
          <View>
            <NoAvailability />
          </View>
        }
        renderItem={({ item }) => <ClinicalTrial item={item} />}
      />
    </View>
  )
}

export default ClinicalTrials
