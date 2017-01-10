import React from 'react';
import styled from 'styled-components';
import rem from 'utils/pxtorem';
import { Link } from 'react-router';

const Button = styled(Link)`
  position: fixed;
  right: ${rem('10px')};
  bottom: ${rem('10px')};
  width: ${rem('60px')};
  height: ${rem('60px')};
  background: url(${require('./assets/icon.png')});
  background-size: 100%;
  z-index: 10000;
`;
export default class UserButton extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Button to="/profile"></Button>
    );
  }
}
