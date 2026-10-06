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
    // Three equal rows on both faces (Michael TG 11150): name on top, the entrance icon in the
    // middle, and the single way in (net.mahan.io) on the bottom of the back face only. The rows
    // never change size, so the card height never changes through the flip.
    return (
      <Card.Content textAlign='center' className='card-rows'>
        <div className='card-row card-row-top'>
          <Header>
            Michael Mahan
            <Header.Subheader content="A Developer"/>
          </Header>
        </div>
        <div className='card-row'>
          <svg className='card-icon' viewBox='0 0 20 16' width='60' height='48' aria-hidden='true' shapeRendering='crispEdges'>
            {/* door frame */}
            <path fill='#3a3d44' d='M6 0h10v16H6zM7 1v15h8V1z'/>
            {/* the lit room beyond */}
            <path fill='#d6ecff' d='M7 1h8v15H7z'/>
            <path fill='#bcdcf7' d='M7 14h8v2H7z'/>
            {/* two racks */}
            <path fill='#23262c' d='M8 3h3v12H8zM12 3h2v12h-2z'/>
            {/* status lights */}
            <path fill='#3ddc84' d='M9 4h1v1H9zM9 7h1v1H9zM12 5h1v1h-1zM9 11h1v1H9zM12 10h1v1h-1z'/>
            <path fill='#3df0ff' d='M10 5h1v1h-1zM10 9h1v1h-1zM13 7h1v1h-1zM13 12h1v1h-1zM10 13h1v1h-1z'/>
            {/* the door, swung open toward us */}
            <path fill='#5b5f69' d='M3 2h1V1h2v15H4v-1H3z'/>
            <path fill='#8a8e98' d='M4 8h1v1H4z'/>
          </svg>
        </div>
        <div className='card-row'>
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