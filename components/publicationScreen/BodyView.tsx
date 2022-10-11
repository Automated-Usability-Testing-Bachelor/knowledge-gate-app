import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Colors from '../../constants/Colors'
import LinkOriginalButton from './LinkOriginalButton'
import { Item } from '../../screens/PublicationScreen'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 5,
    justifyContent: 'flex-start'
  },
  titleAndBodyContainer: {
    flex: 24
  },
  publishDateText: {
    fontFamily: 'Sans-Medium',
    color: Colors.darkGrey.color,
    fontSize: 10
  },
  DateContainer: {
    justifyContent: 'center',
    flex: 1,
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
  btnContainer: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: "center"
  }
})

const BodyView: React.FC<Item> = ({ publishDate, body, link, title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.DateContainer}>
        <View>
          <Text style={styles.publishDateText}>{publishDate}</Text>
        </View>
      </View>
      <View style={styles.titleAndBodyContainer}>
        <View>
          <Text style={styles.TitleText}>{title}</Text>
        </View>
        <ScrollView>
          <Text style={styles.BodyText}>{body}</Text>
        </ScrollView>
      </View>
      <View style={styles.btnContainer}>
        <LinkOriginalButton link={link} />
      </View>
    </View>
  )
}

export default BodyView
