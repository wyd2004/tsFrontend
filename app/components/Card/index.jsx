/* global COLOR_1 COLOR_2 COLOR_3 */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px;
  border-radius: 2px;
  text-align: center;
  background: white;
  margin: 6px;
`;
export default class Card extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    children: React.PropTypes.node,
  };
  render() {
    return (
      <Wrapper>
        {React.Children.toArray(this.props.children)}
      </Wrapper>
    );
  }
}
