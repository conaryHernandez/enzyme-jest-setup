import React from 'react';
import { shallow } from 'enzyme';
import Congrats from './Congrats';
import { findByTestAttr, checkProps } from '../../test/testUtils';

/**
 * Factory function to create a ReactWrapper for the Congrats component.
 * @function setup
 * @param {object} testValues - contextValues specific to this setup.
 * @returns {ReactWrapper}
 */

const defaultProps = { success: false };

const setup = (props = {}, state = null) => {
  const setupProps = { ...defaultProps, ...props };
  const wrapper = shallow(<Congrats {...setupProps} />);

  if (state) {
    wrapper.setState(state);
  }
  return wrapper;
};

test('renders without error', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, 'component-congrats');

  expect(component.length).toBe(1);
});

test('renders no text when `success` props is false', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, 'component-congrats');

  expect(component.text()).toBe('');
});

test('renders non-empty congrats message when `success` props is true', () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.text().length).not.toBe(0);
});

test('doest not throw warning with expected props', () => {
  const expectedProps = { success: false };

  checkProps(Congrats, expectedProps);
});
