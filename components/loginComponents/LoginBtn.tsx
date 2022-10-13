import React, { useCallback } from 'react'
import { StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import RedButton from '../RedButton'

const styles = StyleSheet.create({
  container: {
    paddingTop: 20
  }
})

export type Props = {
  name: string
}
const LoginBtn: React.FC<Props> = ({ name }) => {
  const navigation = useNavigation()
  const onPress = useCallback(() => {
    // eslint-disable-line
    navigation.navigate('Onboarding')
  }, [navigation])

  return (
    <View style={styles.container}>
      <RedButton name={name} onPress={onPress} />
    </View>
  )
}

export default LoginBtn
