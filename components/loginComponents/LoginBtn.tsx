import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { StackParamList } from '../../navigation/StackParamList'
import RedButton from '../RedButton'

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
})

type PropsButton = {
  name: string
  onClick: () => void
}

export type StackNavigation = StackNavigationProp<StackParamList>

const LoginBtn: React.FC<PropsButton> = ({ name, onClick }) => {
  return (
    <View style={styles.container}>
      <RedButton name={name} onPress={onClick} icon={undefined} />
    </View>
  )
}

export default LoginBtn
