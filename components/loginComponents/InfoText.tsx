import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingTop: 20
  },
  touchable: { borderRadius: 10 },
  text: {
    fontSize: 10,
    color: Colors.black.color
  }
})

const InfoText: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {'Your first time here? Look for an invitation to our platform in your'}
        {'e-mail inbox'}
      </Text>
    </View>
  )
}

export default InfoText
