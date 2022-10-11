import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useCallback } from 'react'
import { StyleSheet, View } from 'react-native'
import RedButton from '../RedButton'
import RootStackParamList from '../../navigation/index'

const styles = StyleSheet.create({
  container: {
    paddingTop: 20
  }
})



type PropsButton = {
  name: string
}

const LoginBtn: React.FC<PropsButton> = ({ name }) => {



    export type onBoardingProp = {
        StackNavigationProp<RootStackParamList, 'Onboarding'>
    }


    const navigation = useNavigation<onBoardingProp>()

//   const redButtonHandler = useCallback(() => {
//      navigation.navigate('Onboarding')
//   }, [])


  return (
    <View style={styles.container}>
      <RedButton name={
        name
      } onPress={navigation.navigate(
        'Onboarding'
      )} icon={undefined} />
    </View>
  )
}

export default LoginBtn
