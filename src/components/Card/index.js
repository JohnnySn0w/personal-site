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
    this.stopPropagation = this.stopPropagation.bind(this);
  }

  handleItemClick() { 
    const { visible, visible2 } = this.state;
    this.setState({ 
      visible: !visible,
      visible2: !visible2,
    });
  }

  stopPropagation(event) {
    event.stopPropagation();
  }

  cardContent() {
    const { flipped } = this.state;
    // Both faces share one structure: the name block, then a fixed-height row. The back puts the
    // single way in (net.mahan.io) in that row; the front leaves it empty. The card height never changes.
    return (
      <Card.Content textAlign='center'>
        <Header>
          Michael Mahan
          <Header.Subheader content="A Developer"/>
        </Header>
        <div style={{ height: '3.5em', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {flipped && (
            <a href="https://net.mahan.io" onClick={this.stopPropagation}
               style={{ fontWeight: 700, fontSize: '1.15em', letterSpacing: '0.04em' }}>&gt;CONTINUE</a>
          )}
        </div>
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