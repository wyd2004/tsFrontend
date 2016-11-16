/* global COLOR_1 COLOR_2 COLOR_3 */
import React from 'react';
import CardWrap from './CardWrap';

export default class Card extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    children: React.PropTypes.node,
  };
  render() {
    return (
      <CardWrap>
        {React.Children.toArray(this.props.children)}
      </CardWrap>
    );
  }
}
