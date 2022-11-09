import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import Colors from '../constants/Colors'

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.warmGrey.color,
    height: '100%',
  },
})

type BackgroundTemplateProps = {
  body: React.ReactNode
  header?: React.ReactNode
}

const BackgroundTemplate: React.FC<BackgroundTemplateProps> = ({
  body,
  header,
}) => {
  return (
    <SafeAreaView style={styles.background}>
      <View style={{ height: '100%' }}>
        {header}
        {body}
      </View>
    </SafeAreaView>
  )
}

export default BackgroundTemplate
