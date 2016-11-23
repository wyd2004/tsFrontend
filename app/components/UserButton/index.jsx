import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

const Button = styled(Link)`
  position: fixed;
  right: 10px;
  bottom: 10px;
  width: 40px;
  height: 40px;
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
