import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'
import StatusBadge from '../StatusBadge'
import { Invoice } from './InvoiceCards'

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 5,
    paddingHorizontal: 15,
    paddingVertical: 7.5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 5,
    borderColor: 'rgba(0, 27, 114, 0.3)',
    borderWidth: 1
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  topRow: {
    marginBottom: 5
  },
  bottomRow: {
    marginTop: 5
  },
  text: {
    fontSize: 14
  },
  company: {
    fontFamily: 'Serif-SemiBold',
    color: Colors.blue.color
  },
  date: {
    fontFamily: 'Serif-Medium',
    color: 'rgba(29, 29, 27, 0.6)'
  },
  money: {
    color: Colors.black.color,
    fontFamily: 'Serif-Medium'
  }
})

const InvoiceCard: React.FC<Invoice> = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.row, styles.topRow]}>
        <View>
          <Text style={[styles.text, styles.company]}>{item.company}</Text>
        </View>
        <View>
          <Text style={[styles.text, styles.date]}>{item.raisedDate}</Text>
        </View>
      </View>
      <View style={[styles.row, styles.bottomRow]}>
        <View>
          <Text
            style={[styles.text, styles.money]}
          >{`${item.amount} ${item.currency}`}</Text>
        </View>
        <View>
          <StatusBadge status={item.status} />
        </View>
      </View>
    </View>
  )
}

export default InvoiceCard
