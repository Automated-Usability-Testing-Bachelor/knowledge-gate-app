import React from 'react'
import { StyleSheet, View } from 'react-native'
import RedButton from '../RedButton'
import PlusIcon from './PlusIcon'

export type Props = {
  ShowModalCallback: () => void
}
const ScheduleBtn: React.FC<Props> = ({ ShowModalCallback }) => {
  return (
    <View style={styles.container}>
      <RedButton
        name="Schedule"
        onPress={ShowModalCallback}
        icon={
          <View>
            <PlusIcon />
          </View>
        }
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: { paddingHorizontal: 25, marginBottom: 25 }
})

export default ScheduleBtn
