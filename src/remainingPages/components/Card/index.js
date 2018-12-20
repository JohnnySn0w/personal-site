import React, { Component } from 'react';
import { Card, Header, Transition } from 'semantic-ui-react';

export default class MainAttraction extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: true,
			visible2: true,
			flipped: false,
		};
		this.handleItemClick = this.handleItemClick.bind(this);
	}

	handleItemClick() { 
		const { visible, visible2 } = this.state;
		this.setState({ 
			visible: !visible,
			visible2: !visible2,
		});
	}

	sendEmail() 
	{
		window.location = 'mailto:mmahan@pm.me';
	}

	stopPropagation(event) {
		event.stopPropagation();
	}

	cardContent() {
		const { flipped } = this.state;
		if(flipped){
			return(
				<Card.Content textAlign='center'>
					<Header as="h3">
						Michael Mahan
						<Header.Subheader as="h4" content="A Developer"/>
					</Header>
					<div onClick={this.stopPropagation.bind(this)}>
						<a onClick={() => this.sendEmail()}>mmahan@pm.me</ a>
					</div>
					<br/>
					<div onClick={this.stopPropagation.bind(this)}>
						<a href="https://github.com/JohnnySn0w">GitHub</a>
					</div>
				</Card.Content>
			);
		}
		return (
			<Card.Content textAlign='center'>
				<Header as="h3">
					Michael Mahan
					<Header.Subheader as="h4" content="A Developer"/>
					&nbsp;
					<br/><br/>
					&nbsp;
				</Header>
			</Card.Content>
		);
	}
	// add a card flip noise
	render() {
		const { 
			visible,
			visible2,
			flipped
		} = this.state;

		return (
			<div className='silvered'>
				<Transition
					visible={visible}
					animation='horizontal flip'
					duration="600"
					onHide={() => this.setState({ visible: !visible })}
				>
					<Card raised onClick={() => this.handleItemClick()}>
						<Transition
							visible={visible2}
							animation="fade"
							duration="600"
							onHide={() => this.setState({ flipped: !flipped, visible2: !visible2})}
						>
							{this.cardContent()}
						</Transition>
					</Card>
				</Transition>
			</div>
		);
	}
}