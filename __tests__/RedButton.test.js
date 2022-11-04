/*eslint-disable */

import React from 'react'
import renderer from 'react-test-renderer'
import RedButton from "../components/RedButton"
import Arrow from "../components/Arrow"
import { fireEvent, render, waitFor, screen } from '@testing-library/react-native';


// eslint-disable-next-line no-undef
describe('<RedButton />', () => {
  
    it('has 1 child', () => {
        const tree = renderer.create(<RedButton />).toJSON();
        expect(tree.children.length).toBe(1)
    });


    it('text props is passed to <text /> component', () => {
        const propText = 'test text'
        const compTree = renderer.create(<RedButton name={propText} />).toJSON();
        
        const viewComp = compTree.children[0]
        const secViewComp = viewComp.children[0]
        const textComp = secViewComp.children[0]
        const textPropActual = textComp.children[0]

        expect(compTree.children[0].type).toBe('View')
        expect(viewComp.children[0].type).toBe('View')
        expect(secViewComp.children.length).toBe(2)
        expect(textComp.type).toBe('Text')
        expect(textPropActual).toBe(propText)

        
    })
    it('icon props is passed', () => {
        const propText = 'test text'
        const compTree = renderer.create(<RedButton icon={<Arrow />} />).toJSON();
        
        const viewComp = compTree.children[0]
        const secViewComp = viewComp.children[0]
        const IconComp = secViewComp.children[1]
        expect(compTree.children[0].type).toBe('View')
        expect(viewComp.children[0].type).toBe('View')
        expect(secViewComp.children.length).toBe(2)
        expect(IconComp.children.length).toBeGreaterThan(0)

        
    })

    it('Test onPress event', async () => {
        const accessibilityLabel = 'This is a test button';
        const onPress = jest.fn(()=> "pressed");
        const activeButton = render(
        <RedButton onPress={onPress} testID="button" accessibilityLabel={accessibilityLabel}/>
        )
        const { getByTestId } = activeButton;
        const button = getByTestId('button');
        expect(activeButton).toBeDefined();

        const activeButtonAsJson = activeButton.toJSON();
        expect(activeButtonAsJson).toMatchSnapshot();
        fireEvent.press(button)
        await waitFor(() => {
            expect(onPress.mock.calls.length).toBe(1)
            expect(onPress.mock.results[0].value).toBe("pressed")
        });
      
    });
    
  
});

