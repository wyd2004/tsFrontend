/* global COLOR_2 */
import React, { PureComponent, PropTypes } from 'react';
import styled from 'styled-components';
import rem from 'utils/pxtorem';
import { Link } from 'react-router';
const Wrapper = styled(Link)`
  display: inline-block;
  position: relative;
  width: 25%;
  margin-bottom: ${rem('6px')};
  text-align: center;
`;

const Img = styled.img`
  width: ${rem('64px')};
  height: ${rem('64px')};
  display: block;
  margin: auto;
`;

const FlagIcon = styled.img`
  position: absolute;
  width: ${rem('30px')};
  height: ${rem('16px')};
  top: -${rem('6px')};
  right: -${rem('12px')};
`;
const Text = styled.span`
  margin-top: ${rem('6px')};
  font-size: ${rem('14px')};
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
