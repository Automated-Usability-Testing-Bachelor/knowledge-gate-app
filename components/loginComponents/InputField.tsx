import React from 'react'
import { KeyboardTypeOptions, StyleSheet, TextInput, View } from 'react-native'
import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  input: {
    backgroundColor: Colors.offWhite.color,
    padding: 5,
    borderRadius: 5,
    paddingLeft: 15
  }
})

type Props = {
  prompt: string
  keyboardType: KeyboardTypeOptions
}

const InputField: React.FC<Props> = ({ prompt, keyboardType }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardType={keyboardType}
        placeholder={prompt}
        placeholderTextColor={Colors.darkGrey.color}
      />
    </View>
  )
}

export default InputField
