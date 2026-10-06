import React, { Component } from 'react';
import { Card, Header, Transition } from 'semantic-ui-react';

export default class MainAttraction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      visible2: true,
      flipped: false,
      doorOpen: false,
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

  componentDidUpdate(prevProps, prevState) {
    // The door swings after the face has faded in: open on the back, shut again on the front.
    if (prevState.flipped !== this.state.flipped) {
      clearTimeout(this.doorTimer);
      this.doorTimer = setTimeout(() => this.setState({ doorOpen: this.state.flipped }), 450);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.doorTimer);
  }

  stopPropagation(event) {
    event.stopPropagation();
  }

  cardContent() {
    const { flipped, doorOpen } = this.state;
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
          <svg className={'card-icon' + (doorOpen ? ' open' : '')} viewBox='0 -1 20 20' width='60' height='60' aria-hidden='true'>
            {/* the lit room beyond */}
            <path fill='#d6ecff' d='M7 1h8v15H7z'/>
            <path fill='#bcdcf7' d='M7 14h8v2H7z'/>
            {/* two racks */}
            <path fill='#23262c' d='M8 3h3v12H8zM12 3h2v12h-2z'/>
            {/* status lights */}
            <path fill='#3ddc84' d='M9 4h1v1H9zM9 7h1v1H9zM12 5h1v1h-1zM9 11h1v1H9zM12 10h1v1h-1z'/>
            <path fill='#3df0ff' d='M10 5h1v1h-1zM10 9h1v1h-1zM13 7h1v1h-1zM13 12h1v1h-1zM10 13h1v1h-1z'/>
            {/* door frame */}
            <path fill='#3a3d44' d='M6 0h10v1H7v15H6zM15 1h1v15h-1z'/>
            {/* the door: hinged at the frame's left edge; swings out to a "/" slanted leaf */}
            <g className='door'>
              <path fill='#5b5f69' d='M7 1h8v15H7z'/>
              <path fill='#6b6f79' d='M8 2h6v6H8zM8 9h6v6H8z'/>
              <path fill='#5b5f69' d='M9 3h4v4H9zM9 10h4v4H9z'/>
              <path fill='#c9ccd2' d='M13 8h1v1h-1z'/>
            </g>
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