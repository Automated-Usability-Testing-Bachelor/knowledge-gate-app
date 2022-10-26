import React from 'react'
import { StyleSheet, View } from 'react-native'
import { PlusIcon } from 'react-native-heroicons/solid'

const styles = StyleSheet.create({
  container: {
    paddingRight: 5,
    paddingLeft: 5
  }
})

const PlusIconComponent = () => {
  return (
    <View style={styles.container}>
      <PlusIcon size={18} color={'white'} />
    </View>
  )
}

export default PlusIconComponent
