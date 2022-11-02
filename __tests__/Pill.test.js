/*eslint-disable */
import React from 'react'
import renderer from 'react-test-renderer'
import Pill from '../components/Pill'

// eslint-disable-next-line no-undef
describe('<Pill />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<Pill />).toJSON();
    console.log(tree)
    expect(tree).toMatchSnapshot()
  });
});

