import { StyleSheet, Text, View } from 'react-native'

const Pill = ({ backgroundColor, borderColor, fontColor, text }: any) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor,
          borderColor,
          borderWidth: 1
        }
      ]}
    >
      <Text style={[styles.text, { color: fontColor }]}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 2.5
  },
  text: {
    fontSize: 12,
    fontFamily: 'Sans-Regular'
  }
})

export default Pill
