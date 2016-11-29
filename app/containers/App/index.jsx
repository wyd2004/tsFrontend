/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */
/* global COLOR_4 */
import React from 'react';
import styled from 'styled-components';

const Warpper = styled.div`
  padding: 6px;
  overflow: hidden;
`;
export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <Warpper>
        {React.Children.toArray(this.props.children)}
      </Warpper>
    );
  }
}
