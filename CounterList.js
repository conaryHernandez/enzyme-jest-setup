import React, {Component, Fragment} from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types';

const createRange = num => Array.from(Array(num).keys())

class CounterList extends Component {
	state = {
		numCounters: 2,
	}

	addCounter = () => {
		this.setState(prevState => ({
			numCounters: prevState.numCounters + 1,
		}));
	}

	renderCounter = (index) => {
		return(
			<li key={`counter-${index}`}>
				<Counter />
			</li>
		);
	}

	render() {
		const countersArray =  createRange(this.state.numCounters);

		return(
			<Fragment>
				<button data-testid="increment-counter" onClick={this.addCounter}>Add Counter</button>
				<ul>{countersArray.map(num => this.renderCounter(num))}</ul>
			</Fragment>
		);
	}
}

export default CounterList;