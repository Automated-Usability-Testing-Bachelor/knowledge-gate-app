import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import Colors from '../constants/Colors'

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.warmGrey.color
  }
})

type BackgroundTemplateNoTabProps = {
  body: React.ReactNode
  header?: React.ReactNode
}

const BackgroundTemplateNoTabProps: React.FC<BackgroundTemplateNoTabProps> = ({
  body,
  header
}) => {
  return (
    <SafeAreaView style={styles.background}>
      <View style={{ height: '100%', paddingBottom: 0 }}>
        {header}
        {body}
      </View>
    </SafeAreaView>
  )
}

export default BackgroundTemplateNoTabProps
