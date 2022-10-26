import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useCallback } from 'react'
import { StyleSheet, View } from 'react-native'
import RedButton from '../RedButton'
import { StackParamList } from '../../navigation/StackParamList'

const styles = StyleSheet.create({
  container: {
    paddingTop: 20
  }
})

type PropsButton = {
  name: string
}

export type StackNavigation = StackNavigationProp<StackParamList>

const LoginBtn: React.FC<PropsButton> = ({ name }) => {
  const navigation = useNavigation<StackNavigation>()

  const redButtonHandler = useCallback(() => {
    navigation.navigate('Onboarding')
  }, [navigation])

  return (
    <View style={styles.container}>
      <RedButton name={name} onPress={redButtonHandler} icon={undefined} />
    </View>
  )
}

export default LoginBtn
