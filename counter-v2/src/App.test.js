import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import adapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({adapter: new adapter()})


// using data attrbiutes instead of html properties because devs can use those for coding purposes
it('renders without crashing', () => {
	const wrapper = shallow(<App />);
	const appComponent = wrapper.find('[data-test="component-app"]');

	expect(appComponent.length).toBe(1);
});

test('renders without error', () => {
});

test('renders increment button', () => {
});

test('renders counter display', () => {
});

test('counter starts at 0', () => {
});

// state || display (implementation vs behavior)
test('clicking button increments counter display', () => {

});