import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../constants/Colors'

export type Props = {
  status: string
}

const StatusBadge: React.FC<Props> = ({ status }) => {
  const [currentStyle, setCurrentStyle] = useState({
    name: 'Unknown',
    backgroundColor: 'rgba(221, 38, 56, 0.2)',
    textColor: Colors.red.color
  })
  useEffect(() => {
    determineStyle(status)
  }, [])

  const determineStyle = (status: string) => {
    switch (status.toLowerCase()) {
      case 'complete':
        setCurrentStyle({
          name: 'Complete',
          backgroundColor: 'rgba(60, 180, 65, 0.2)',
          textColor: Colors.green.color
        })
        break
      case 'active not recruiting':
        setCurrentStyle({
          name: 'Active not recruiting',
          backgroundColor: 'rgba(60, 180, 65, 0.2)',
          textColor: Colors.green.color
        })
        break
      case 'raised':
        setCurrentStyle({
          name: 'Raised',
          backgroundColor: 'rgba(0, 27, 114, 0.3)',
          textColor: Colors.blue.color
        })
        break
      case 'approved':
        setCurrentStyle({
          name: 'Approved',
          backgroundColor: 'rgba(234, 173, 18, 0.3)',
          textColor: Colors.yellow.color
        })
        break
      case 'rejected':
        setCurrentStyle({
          name: 'Rejected',
          backgroundColor: 'rgba(221, 38, 56, 0.2)',
          textColor: Colors.red.color
        })
        break
      case 'paid':
        setCurrentStyle({
          name: 'Paid',
          backgroundColor: 'rgba(60, 180, 65, 0.2)',
          textColor: Colors.green.color
        })
        break
      default:
        break
    }
  }

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: currentStyle.backgroundColor }
      ]}
    >
      <Text style={[styles.text, { color: currentStyle.textColor }]}>
        {currentStyle.name}
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width: 'auto',
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50
  },
  text: {
    fontFamily: 'Sans-Medium',
    fontSize: 10
  }
})

export default StatusBadge
