import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Modal, { OnSwipeCompleteParams } from 'react-native-modal'
import PanResponderGestureState from 'react-native-modal'
import moment from 'moment'
import Colors from '../../../constants/Colors'
import { BlueSerifHeader2 } from '../../Texts/Headers'
import TimeSelectionView from './TimeSelectionView'
import RedButton from '../../RedButton'
import { DateTimeRange } from '../CalendarBody'
import { MomentTimeRange } from '../../../mocks/CalendarMockData'

export type Props = {
  showModal: boolean
  closeModal: Function
  getTimeRangeCallback: Function
  modalStartTimeRange: DateTimeRange
}

const ScheduleAvailabilityModal: React.FC<Props> = ({
  showModal,
  closeModal,
  getTimeRangeCallback,
  modalStartTimeRange
}) => {
  const initialTimeRange: MomentTimeRange = {
    from: moment(modalStartTimeRange.from),
    to: moment(modalStartTimeRange.to)
  }
  const [cachedTimeRange, setCachedTimeRange] =
    useState<MomentTimeRange>(initialTimeRange)
  const getTimeRange = (timeRange: MomentTimeRange) => {
    setCachedTimeRange(timeRange)
  }

  const onPressSave = () => {
    getTimeRangeCallback(cachedTimeRange)
    closeModal()
  }
  useEffect(() => {
    setCachedTimeRange(initialTimeRange)
  }, [showModal])

  return (
    <View>
      <Modal
        isVisible={showModal}
        backdropOpacity={0.3}
        onBackdropPress={() => closeModal()}
        swipeDirection={['down']}
        style={styles.modal}
        onSwipeComplete={() => closeModal()}
        useNativeDriverForBackdrop
      >
        <View style={styles.containerOuter}>
          <View style={styles.containerInner}>
            <BlueSerifHeader2 text="Schedule Availability"></BlueSerifHeader2>
            <TimeSelectionView
              returnTimeRangeCallback={getTimeRange}
              startFrom={modalStartTimeRange.from}
              startTo={modalStartTimeRange.to}
            />
            <RedButton name='Save' onPress={onPressSave} />
          </View>
        </View>
      </Modal>
    </View>
  )
}
const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0
  },
  containerOuter: {
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Colors.warmGrey.color
  },
  containerInner: {
    // padding: 10,
    borderRadius: 20,
    backgroundColor: Colors.offWhite.color,
    padding: 30
  }
})

export default ScheduleAvailabilityModal
