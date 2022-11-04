/*eslint-disable */

import React from 'react'
import ScheduleBtn from "../components/calendarComponents/Availability/ScheduleBtn"
import { fireEvent, render, waitFor, screen } from '@testing-library/react-native';


// eslint-disable-next-line no-undef
describe('<VisibleItem />', () => {
    const id = "abc"
    const onPress = jest.fn(()=> "pressed");
    it('Test onPress event', async () => {
        
        const activeButton = render(
        <ScheduleBtn ShowModalCallback={onPress} testID="button"  />
        )
        const { getByTestId } = activeButton;
        const button = getByTestId('button');
        expect(activeButton).toBeDefined();

        const activeButtonAsJson = activeButton.toJSON();
        expect(activeButtonAsJson).toMatchSnapshot();
        fireEvent.press(button)
        fireEvent.press(button)
        await waitFor(() => {
            expect(onPress.mock.calls.length).toBe(2)
            expect(onPress.mock.results[0].value).toBe("pressed")
            expect(onPress.mock.results[1].value).toBe("pressed")
        });
      
    });
    it('Test onPress event when not set in props', async () => {
        
        const activeButton = render(
        <ScheduleBtn testID="button"  />
        )
        const { getByTestId } = activeButton;
        const button = getByTestId('button');
        expect(activeButton).toBeDefined();

        const activeButtonAsJson = activeButton.toJSON();
        expect(activeButtonAsJson).toMatchSnapshot();
        fireEvent.press(button)
        fireEvent.press(button)
        await waitFor(() => {
            expect(onPress.mock.calls.length).toBe(0)
        });
      
    });
   
  
});

