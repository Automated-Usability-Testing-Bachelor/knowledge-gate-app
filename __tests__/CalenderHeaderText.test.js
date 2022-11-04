/*eslint-disable */

import React from 'react'
import CalenderHeaderText from "../components/calendarComponents/CalenderHeaderText"
import { fireEvent, render, waitFor, screen } from '@testing-library/react-native';
import moment from "moment"
// eslint-disable-next-line no-undef
describe('<CalenderHeaderText />', () => {
    const date = moment()
    it('Test if text is set', async () => {
        
        const activeButton = render(
        <CalenderHeaderText date={date} />
        )
        runAllTimers();
        const { getByText } = activeButton;
        const TextComp = getByText(`${date.format('dddd, MMMM Do')}`);
        expect(TextComp).toBeDefined()
    });
  
});

