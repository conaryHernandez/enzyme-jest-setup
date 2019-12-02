import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import adapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({adapter: new adapter()})

it('renders without crashing', () => {

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