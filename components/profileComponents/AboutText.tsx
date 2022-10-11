import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ReadMore from 'react-native-read-more-text'
import Colors from '../../constants/Colors'

const AboutText = ({ about }: any) => {
  const renderTruncatedFooter = (handlePress: any) => (
    <Text style={styles.readText} onPress={handlePress}>
      {'Read more'}
    </Text>
  )

  const renderRevealedFooter = (handlePress: any) => (
    <Text style={styles.readText} onPress={handlePress}>
      {'Read less'}
    </Text>
  )

  return (
    <View>
      <Text style={styles.ContentHeader}>{'About Me'}</Text>
      <ReadMore
        numberOfLines={3}
        renderTruncatedFooter={renderTruncatedFooter}
        renderRevealedFooter={renderRevealedFooter}
      >
        <Text style={styles.aboutText}>{about}</Text>
      </ReadMore>
    </View>
  )
}

const styles = StyleSheet.create({
  ContentHeader: {
    fontSize: 16,
    fontFamily: 'Serif-Medium',
    color: Colors.blue.color
  },
  aboutText: {
    fontSize: 12,
    fontFamily: 'Sans-Regular'
  },
  readText: {
    fontSize: 13,
    color: Colors.red.color,
    fontFamily: 'Sans-Regular',
    textDecorationLine: 'underline'
  }
})

export default AboutText
