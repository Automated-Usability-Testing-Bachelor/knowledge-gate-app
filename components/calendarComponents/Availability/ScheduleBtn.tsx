import React from 'react'
import { StyleSheet, View } from 'react-native'
import RedButton from '../../RedButton'
import PlusIcon from '../PlusIcon'

const styles = StyleSheet.create({
  container: { paddingHorizontal: 25, marginBottom: 25 }
})

export type Props = {
  ShowModalCallback: () => void
  testID?: string
}
const ScheduleBtn: React.FC<Props> = ({ ShowModalCallback, testID }) => {
  return (
    <View style={styles.container}>
      <RedButton
        name={'Schedule'}
        onPress={ShowModalCallback}
        testID={testID}
        icon={
          <View>
            <PlusIcon />
          </View>
        }
      />
    </View>
  )
}

export default ScheduleBtn
