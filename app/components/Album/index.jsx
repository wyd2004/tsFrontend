/* global COLOR_2 */
import React, { PureComponent, PropTypes } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
const Wrapper = styled(Link)`
  display: inline-block;
  position: relative;
  width: 25%;
  margin-bottom: 6px;
  text-align: center;
`;

const Img = styled.img`
  width: 64px;
  height: 64px;
  display: block;
  margin: auto;
`;

const FlagIcon = styled.img`
  position: absolute;
  width: 30px;
  height: 16px;
  top: -6px;
  right: -12px;
`;
const Text = styled.span`
  margin-top: 6px;
  font-size: 14px;
  color: ${COLOR_2};
`;
export default class Album extends PureComponent {
  static defaultProps = {
    image: require('./assets/defaults.png'),
  };

  static propTypes = {
    image: PropTypes.string,
    isNew: PropTypes.bool,
    title: PropTypes.string,
    to: PropTypes.string,
    id: PropTypes.number,
  };

  render() {
    const { image, isNew, title, id, to } = this.props;
    const newPng = require('./assets/new.png');

    return (
      <Wrapper to={to || `/special/${id}`}>
        <Img src={image} alt={title} />
        {isNew ? (<FlagIcon src={newPng} />) : ''}
        <Text>{title}</Text>
      </Wrapper>
    );
  }
}
