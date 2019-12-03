import React from 'react';
import CounterList from './CounterList';
import { shallow } from 'enzyme';

describe('testing CounterList Component', () => {
	it('should show 2 counters', () => {
		const wrapper = shallow(<CounterList />);
		const counters = wrapper.find('Counter');

		expect(counters.length).toEqual(2);

	});

	it('It cand add one more counter', () => {
		const wrapper = shallow(<CounterList />);
		const btn = wrapper.find('button[data-testid="increment-counter"]');

		btn.simulate('click');

		const counters = wrapper.find('Counter');

		expect(counters.length).toEqual(3);

	});
});