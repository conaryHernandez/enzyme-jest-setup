import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import adapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({adapter: new adapter()})

const setup = (props = {}, state = null) => {
	const wrapper = shallow(<App {...props} />);
	
	if (state) {
		wrapper.setState(state);		
	}
	return wrapper;
}

const findByTestAttr = (wrapper, val) => {
	return wrapper.find(`[data-test="${val}"]`);
}

// using data attrbiutes instead of html properties because devs can use those for coding purposes
test('renders without error', () => {
	const wrapper = setup();
	const appComponent = findByTestAttr(wrapper, 'component-app');

	expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
	const wrapper = setup();
	const buttonComponent = findByTestAttr(wrapper, 'increment-button');

	expect(buttonComponent.length).toBe(1);
});

test('renders decrement button', () => {
	const wrapper = setup();
	const buttonComponent = findByTestAttr(wrapper, 'decrement-button');

	expect(buttonComponent.length).toBe(1);
});

test('renders counter display', () => {
	const wrapper = setup();
	const displayComponent = findByTestAttr(wrapper, 'counter-display');

	expect(displayComponent.length).toBe(1);
});

test('counter starts at 0', () => {
	const wrapper = setup();
	const initialState = wrapper.state('counter');

	expect(initialState).toBe(0);
});

// state || display (implementation vs behavior)
test('clicking button increments counter display', () => {
	const counter = 7;
	const wrapper = setup(null, { counter });
	const button = findByTestAttr(wrapper, 'increment-button');

	button.simulate('click');

	const counterDisplay = findByTestAttr(wrapper, 'counter-display');

	expect(counterDisplay.text()).toContain(8); 

});