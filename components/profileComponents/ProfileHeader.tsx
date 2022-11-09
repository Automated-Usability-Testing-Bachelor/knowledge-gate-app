import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Colors from '../../constants/Colors'
// eslint-disable-next-line import/no-cycle
import { ProfileData } from '../../screens/ProfileScreen'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 'auto',
    padding: 20,
  },
  headerTextContainer: {
    marginLeft: 20,
  },
  headerName: {
    fontSize: 20,
    fontFamily: 'Sans-SemiBold',
    color: Colors.blue.color,
  },
  headerText: {
    fontSize: 14,
    fontFamily: 'Sans-Regular',
  },
})

const ProfileHeader: React.FC<ProfileData> = ({
  name,
  company,
  profession,
}) => (
  <View style={styles.container}>
    <Image
      // eslint-disable-next-line global-require, @typescript-eslint/no-unsafe-assignment
      source={require('../../assets/images/jeff.jpg')}
      style={{
        width: 100,
        height: 100,
        borderRadius: 20,
      }}
    />
    <View style={styles.headerTextContainer}>
      <Text style={styles.headerName}>{name}</Text>
      <Text style={styles.headerText}>{company}</Text>
      <Text>{profession}</Text>
    </View>
  </View>
)

export default ProfileHeader
