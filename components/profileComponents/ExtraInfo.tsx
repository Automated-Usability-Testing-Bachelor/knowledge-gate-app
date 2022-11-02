import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
  header: {
    fontSize: 16,
    fontFamily: 'Serif-Medium',
    color: Colors.blue.color,
    paddingBottom: 10
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  cardContainer: {
    alignItems: 'center',
    marginRight: 5
  },
  buttonContainer: {
    backgroundColor: Colors.red.color,
    borderRadius: 5,
    alignItems: 'center',
    padding: 5
  },
  whiteText: {
    color: 'white',
    fontFamily: 'Sans-Regular',
    fontSize: 12
  }
})

const ExtraInfoCard = ({ extra }: any) => {
  const navigation = useNavigation()

  return (
    <>
      <View style={styles.cardContainer}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            navigation.navigate('ProfilePublicationsClinicalTrials', {})
          }}
        >
          <Text style={styles.whiteText}>{extra.publications}</Text>
          <Text style={styles.whiteText}>{'Publications'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            navigation.navigate('ProfilePublicationsClinicalTrials', {})
          }}
        >
          <Text style={styles.whiteText}>{extra.clinicalTrials}</Text>
          <Text style={styles.whiteText}>{'Clinical Trials'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.whiteText}>{extra.murders}</Text>
          <Text style={styles.whiteText}>{'Murders'}</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

const ExtraInfoView = ({ extra }: any) => (
  <View>
    <Text style={styles.header}>{'Additional Info'}</Text>
    <View style={styles.container}>
      {extra.map((element: any) => (
        <ExtraInfoCard key={element} extra={element} />
      ))}
    </View>
  </View>
)

export default ExtraInfoView
