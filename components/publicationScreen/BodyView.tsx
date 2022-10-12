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
    
    borderRadius: 5,
    justifyContent: 'flex-start'
  },
  titleAndBodyContainer: {
    flex: 24
  },
  titleContainer: {
    marginLeft: 15,
    marginBottom: 10
  },
  outerScrollView: {
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 5
  },
  scrollView: {
    padding: 10,
    paddingBottom: 20
  },
  publishDateText: {
    fontFamily: 'Sans-Medium',
    color: Colors.darkGrey.color,
    fontSize: 10
  },
  DateContainer: {
    marginLeft: 15,
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
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
})

const BodyView: React.FC<Item> = ({ publishDate, body, link, title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.DateContainer}>
        <View>
          <Text style={styles.publishDateText}>{`Published: ${publishDate}`}</Text>
        </View>
      </View>
      <View style={styles.titleAndBodyContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.TitleText}>{title}</Text>
        </View>
        <ScrollView
          style={ styles.outerScrollView }
          contentContainerStyle={ styles.scrollView }
        >
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
