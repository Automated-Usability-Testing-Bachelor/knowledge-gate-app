import React, { useCallback, useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
// eslint-disable-next-line import/no-duplicates
import Modal from 'react-native-modal'
import moment from 'moment'
import Colors from '../../../constants/Colors'
import { BlueSerifHeader2 } from '../../Texts/Headers'
// eslint-disable-next-line import/no-unresolved
import TimeSelectionView from './TimeSelectionView'
import RedButton from '../../RedButton'
// eslint-disable-next-line import/no-cycle
import { DateTimeRange } from '../CalendarBody'
import { MomentTimeRange } from '../../../mocks/CalendarMockData'

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

export type Props = {
  showModal: boolean
  closeModal: () => void
  getTimeRangeCallback: (timeRange: MomentTimeRange) => void
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
  const getTimeRange = useCallback((timeRange: MomentTimeRange) => {
    setCachedTimeRange(timeRange)
  }, [])
  const onBackdropPress = useCallback(() => {
    closeModal()
  }, [closeModal])
  const onSwipeComplete = useCallback(() => {
    closeModal()
  }, [closeModal])

  const onPressSave = useCallback(() => {
    getTimeRangeCallback(cachedTimeRange)
    closeModal()
  }, [cachedTimeRange, closeModal, getTimeRangeCallback])
  useEffect(() => {
    setCachedTimeRange(initialTimeRange)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal])

  return (
    <View>
      <Modal
        isVisible={showModal}
        backdropOpacity={0.3}
        onBackdropPress={onBackdropPress}
        swipeDirection={['down']}
        style={styles.modal}
        onSwipeComplete={onSwipeComplete}
        useNativeDriverForBackdrop
      >
        <View style={styles.containerOuter}>
          <View style={styles.containerInner}>
            <BlueSerifHeader2 text={'Schedule Availability'} />
            <TimeSelectionView
              returnTimeRangeCallback={getTimeRange}
              startFrom={modalStartTimeRange.from}
              startTo={modalStartTimeRange.to}
            />
            <RedButton name={'Save'} onPress={onPressSave} />
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default ScheduleAvailabilityModal
