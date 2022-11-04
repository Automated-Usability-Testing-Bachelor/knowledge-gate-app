import React, { useState, useEffect, useCallback } from 'react'
import { View, StyleSheet, Animated } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view'
import moment from 'moment'
import {
  deleteAvailability,
  getAvailabilitiesFromDay,
  Availability
} from '../../../mocks/CalendarMockData'
import VisibleItem, { Data } from './VisibleItem'
import HiddenItemWithActions from './HiddenItemWithActions'
import NoAvailability from '../../NoDataComponents/NoAvailabilities'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backTextWhite: {
    color: '#FFF'
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#666'
  },
  details: {
    fontSize: 12,
    color: '#999'
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    overflow: 'visible'
  },
  clockText: {
    flexDirection: 'row'
  },
  textContainer: {
    alignItems: 'center',
    height: 24
  },
  NoAvailabilityContainer: {
    paddingHorizontal: 25,
    paddingVertical: 10
  }
})

export type Props = {
  currentDate: moment.Moment
  onEditCallback: (id: string | number[]) => void
}

const SwipeableAvilabilityView: React.FC<Props> = ({
  currentDate,
  onEditCallback
}) => {
  const [availabilities, setAvailabilities] = useState<Availability[]>([])
  useEffect(() => {
    const data = getAvailabilitiesFromDay(currentDate)

    if (data) {
      // eslint-disable-next-line no-unused-expressions
      data.availabilities.map((item) => ({
        key: `${item.id}`,
        from: item.from,
        to: item.to
      }))
      setAvailabilities(data.availabilities)
    } else {
      setAvailabilities([])
    }
  }, [currentDate])
  const closeRow = (
    rowMap: { [x: string]: { closeRow: () => void } },
    rowKey: string
  ) => {
    if (rowMap[rowKey]) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      rowMap[rowKey].closeRow()
    }
  }
  const editRow = useCallback(
    (rowMap: { [x: string]: { closeRow: () => void } }, rowKey: string) => {
      closeRow(rowMap, rowKey)
      onEditCallback(rowKey)
    },
    [onEditCallback]
  )

  const deleteRow = useCallback(
    (rowMap: { [x: string]: { closeRow: () => void } }, rowKey: string) => {
      closeRow(rowMap, rowKey)
      const newData = [...availabilities]
      const prevIndex = availabilities.findIndex((item) => item.id === rowKey)
      newData.splice(prevIndex, 1)
      setAvailabilities(newData)
      deleteAvailability(rowKey)
    },
    [availabilities]
  )
  const onRowDidOpen = (index: number) => {
    console.log('This row opened', index)
  }

  const onLeftActionStatusChange = (rowKey: string) => {
    console.log('onLeftActionStatusChange', rowKey)
  }

  const onRightActionStatusChange = (rowKey: string) => {
    console.log('onRightActionStatusChange', rowKey)
  }

  const onRightAction = (rowKey: string) => {
    console.log('onRightAction', rowKey)
  }

  const onLeftAction = (rowKey: string) => {
    console.log('onLeftAction', rowKey)
  }

  const renderItem = (
    data: Data,
    rowMap: { [x: string]: { closeRow: () => void } }
  ) => {
    const rowHeightAnimatedValue = new Animated.Value(60)

    return (
      <VisibleItem
        onEditCallback={onEditCallback}
        data={data}
        rowHeightAnimatedValue={rowHeightAnimatedValue}
        // eslint-disable-next-line react/jsx-no-bind
        removeRow={() => {
          deleteRow(rowMap, data.item.id)
        }}
        leftActionState={undefined}
        rightActionState={undefined}
        testID={data.testID}
      />
    )
  }

  const renderHiddenItem = (
    data: { item: { id: string | number[] } },
    rowMap: { [x: string]: { closeRow: () => void } | { closeRow: () => void } }
  ) => {
    const rowActionAnimatedValue = new Animated.Value(75)
    const rowHeightAnimatedValue = new Animated.Value(60)

    return (
      <HiddenItemWithActions
        data={data}
        rowMap={rowMap}
        rowActionAnimatedValue={rowActionAnimatedValue}
        rowHeightAnimatedValue={rowHeightAnimatedValue}
        onEdit={() => editRow(rowMap, data.item.id)}
        onDelete={() => {
          deleteRow(rowMap, data.item.id)
        }}
      />
    )
  }

  return (
    <View style={styles.container}>
      <SwipeListView
        useNativeDriver
        useFlatList
        swipeToOpenPercent={10}
        swipeToClosePercent={10}
        closeOnScroll={false}
        data={availabilities}
        keyExtractor={(rowData) => {
          return rowData.id.toString()
        }}
        previewRowKey={availabilities[0]?.id.toString()}
        previewDuration={750}
        previewOpenDelay={0}
        previewOpenValue={200}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        ListEmptyComponent={
          <View style={styles.NoAvailabilityContainer}>
            <NoAvailability />
          </View>
        }
        leftOpenValue={75}
        rightOpenValue={-150}
        disableRightSwipe
        onRowDidOpen={onRowDidOpen}
        leftActivationValue={100}
        rightActivationValue={-200}
        leftActionValue={0}
        rightActionValue={-500}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        onLeftAction={onLeftAction}
        onRightAction={onRightAction}
        onLeftActionStatusChange={onLeftActionStatusChange}
        onRightActionStatusChange={onRightActionStatusChange}
        swipeGestureBegan={() => {
          console.log('began')
        }}
      />
    </View>
  )
}

export default SwipeableAvilabilityView
