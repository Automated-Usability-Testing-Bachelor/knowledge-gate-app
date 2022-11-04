/*eslint-disable */

import React from 'react'
import VisibleItem from "../components/calendarComponents/Availability/VisibleItem"
import { fireEvent, render, waitFor, screen } from '@testing-library/react-native';
import {
  Animated,
} from 'react-native'
import moment from "moment"

// eslint-disable-next-line no-undef
describe('<VisibleItem />', () => {
    const id = "abc"
    const value = new Animated.Value(60)
    const dummyData = {index: 1, item: {id: id, from: moment(), to: moment()} }
    const onEditPress = jest.fn((id)=> id);
    it('Test onPress event', async () => {
        
        const activeButton = render(
        <VisibleItem onEditCallback={onEditPress} testID="button" rowHeightAnimatedValue={value} data={dummyData} />
        )
        const { getByTestId } = activeButton;
        const button = getByTestId('button');
        expect(activeButton).toBeDefined();

        const activeButtonAsJson = activeButton.toJSON();
        expect(activeButtonAsJson).toMatchSnapshot();
        fireEvent.press(button)
        fireEvent.press(button)
        await waitFor(() => {
            expect(onEditPress.mock.calls.length).toBe(2)
            expect(onEditPress.mock.results[0].value).toBe(id)
            expect(onEditPress.mock.results[1].value).toBe(id)
        });
      
    });
    it('Test text time from and to set', async () => {
        
        const activeButton = render(
        <VisibleItem onEditCallback={onEditPress} testID="button" rowHeightAnimatedValue={value} data={dummyData} />
        )
        const { getByText } = activeButton;
        const TextComp = getByText(`${dummyData.item.from.format(
                'hh:mm A'
              )} - ${dummyData.item.to.format('hh:mm A')}`);
        expect(TextComp).toBeDefined()
    });
  
});

