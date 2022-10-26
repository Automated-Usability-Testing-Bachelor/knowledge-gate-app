import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Colors from '../../constants/Colors'
import LinkOriginalButton from '../publicationScreen/LinkOriginalButton'
import Dialog from './Dialog'
import StatusBadge from '../StatusBadge'

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 5,
    flex: 1,
    justifyContent: 'flex-start'
  },
  publishDateText: {
    fontFamily: 'Sans-Medium',
    color: Colors.darkGrey.color,
    fontSize: 10
  },
  DateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  titleContainer: {
    marginBottom: 20
  },
  TitleText: {
    fontFamily: 'Sans-Regular',
    fontSize: 14,
    color: Colors.black.color
  },
  BodyText: {
    fontFamily: 'Sans-Light',
    fontSize: 12,
    color: Colors.black.color
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
})

type Props = {
  status: string
  publishDate: string
  title: string
  conditions: string
  interventions: string
  locations: string
  link: string
}

const BodyView: React.FC<Props> = ({
  status,
  publishDate,
  title,
  conditions,
  interventions,
  locations,
  link
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.DateContainer}>
        <View>
          <Text style={styles.publishDateText}>
            {`Published: ${publishDate}`}
          </Text>
        </View>
        <StatusBadge status={status} />
      </View>
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.TitleText}>{title}</Text>
        </View>
        <ScrollView>
          <Dialog title={'Conditions'} body={conditions} />
          <Dialog title={'Locations'} body={locations} />
          <Dialog title={'Interventions'} body={interventions} />
        </ScrollView>
      </View>
      <View style={styles.btnContainer}>
        <LinkOriginalButton link={link} />
      </View>
    </View>
  )
}

export default BodyView
