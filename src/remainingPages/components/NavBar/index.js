import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';

export default class navBarObj extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeItem: '',
		};
		this.handleItemClick = this.handleItemClick.bind(this);
	}
	
	handleItemClick() { 
		(e, { name }) => this.setState({ activeItem: name });
	}

	render() {
		const { activeItem } = this.state.activeItem;
		return(
			<Menu vertical icon >
				<Menu.Item name="menu" active={activeItem==='menu'} onClick={() => { this.handleItemClick; }}>
					<Icon name="bars"></Icon>
				</ Menu.Item>
				<Menu.Item name="sideProj" active={activeItem==='sideProj'} onClick={this.handleItemClick}>
					<Icon name="folder"></Icon>
				</ Menu.Item>
			</Menu>
		);
	}
}
