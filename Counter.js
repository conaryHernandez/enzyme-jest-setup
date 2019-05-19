import React, {Component, Fragment} from 'react';

class Counter extends Component {
	state = {
		count: 0,
	};

	increaseCount = () => {
		this.setState(prevState => {
			return {
				count: prevState.count + 1,
			}
		});
	}

	decreaseCount = () => {
		this.setState(prevState => {
			return {
				count: prevState.count - 1,
			}
		});		
	}

	render() {
		return(
			<Fragment>
				<p>Current Count: {this.state.count}</p>
				<button data-testid="increase-button" onClick={this.increaseCount}>Increment Count</button>
				<button data-testid="decrease-button" onClick={this.decreaseCount}>Increment Count 2</button>
			</Fragment>
		);
	}
}

export default Counter;
