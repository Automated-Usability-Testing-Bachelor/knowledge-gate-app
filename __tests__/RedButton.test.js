/*eslint-disable */
import React from 'react'
import renderer from 'react-test-renderer'
import RedButton from "../components/RedButton"

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
  
});

