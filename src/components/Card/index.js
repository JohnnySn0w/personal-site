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
            {/* stone frame of the arch */}
            <path fill='#3a3d44' d='M6 1h8v1h2v1h1v1h1v12H2V4h1V3h1V2h2z'/>
            {/* block joints */}
            <path fill='#6b6f79' d='M9 1h2v2H9zM4 6h3v1H4zM13 6h3v1h-3zM2 9h4v1H2zM14 9h4v1h-4zM4 12h2v1H4zM14 12h2v1h-2zM5 3h1v1H5zM14 3h1v1h-1z'/>
            {/* the way in */}
            <path fill='#0d0e11' d='M8 4h4v1h1v1h1v10H6V6h1V5h1z'/>
            {/* steps going down, narrowing into the dark */}
            <path fill='#8a8e98' d='M6 15h8v1H6z'/>
            <path fill='#5b5f69' d='M7 13h6v1H7z'/>
            <path fill='#3a3d44' d='M8 11h4v1H8z'/>
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