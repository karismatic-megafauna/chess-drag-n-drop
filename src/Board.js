import React, { Component, PropTypes } from 'react';
import Square from './Square';
import Knight from './Knight';

export default class Board extends Component {
  static propTypes = {
    knightPosition: PropTypes.arrayOf(
      PropTypes.number.isRequired
    ).isRequired
  };

  renderSquare(x , y) {
    const black = ( x + y ) % 2 === 1;
    const [knightX, knightY] = this.props.knightPosition;
    const piece = ( x === knightX && y === knightY ) ? <Knight /> : null;

    return (
      <Square black={black}>
        {piece}
      </Square>
    );
  }

  render() {
    return (
      <div>
        <Square black>
          <Knight />
        </Square>
      </div>
    );
  }
}