import React, { Component } from 'react';
import { Card, Header, Transition, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class MainAttraction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      visible2: true,
      flipped: false,
    };
    this.handleItemClick = this.handleItemClick.bind(this);
    this.stopPropagation = this.stopPropagation.bind(this);
  }

  handleItemClick() { 
    const { visible, visible2 } = this.state;
    this.setState({ 
      visible: !visible,
      visible2: !visible2,
    });
  }

  sendEmail() {
    window.location = 'mailto:mmahan@pm.me';
    return false;
  }

  stopPropagation(event) {
    event.stopPropagation();
  }

  cardContent() {
    const { flipped } = this.state;
    if(flipped){
      return(
        <Card.Content textAlign='center'>
          <Header>
						Michael Mahan
            <Header.Subheader content="A Developer"/>
          </Header>
          <Container className='middle' onClick={this.stopPropagation}>
            {/* eslint-disable-next-line */}
            <a onClick={this.sendEmail}>mmahan@pm.me</a>
          </Container>
          <br/><br/>
          <Container className='middle' onClick={this.stopPropagation}>
            <a href="https://github.com/JohnnySn0w">GitHub </a>
            ·
            <a href="https://www.linkedin.com/in/michael-mahann/"> LinkedIn </a>
            ·
            <Link to="/gallery"> Pixel Art</Link>
          </Container>
        </Card.Content>
      );
    }
    return (
      <Card.Content textAlign='center'>
        <Header>
					Michael Mahan
          <Header.Subheader content="A Developer"/>
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
      <div className='card'>
        <Transition
          visible={visible}
          animation='horizontal flip'
          duration="600"
          onHide={() => this.setState({ visible: !visible })}
        >
          <Card raised onClick={this.handleItemClick}>
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