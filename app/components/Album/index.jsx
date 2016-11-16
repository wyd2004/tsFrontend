import React, { PureComponent, PropTypes } from 'react';
import styled from 'styled-components';

const Wrapper = styled.a`
  display: inline-block;
  position: relative;
`;

const Img = styled.img`
  width: 64px;
  height: 64px;
`;

const FlagIcon = styled.img`
  position: absolute;
  width: 30px;
  height: 16px;
  top: -6px;
  right: -12px;
`;

export default class Album extends PureComponent {
  static defaultProps = {
    isNew: false,
    alt: '栏目',
    src: require('./assets/defaults.png'),
    url: '###',
  };

  static propTypes = {
    src: PropTypes.string,
    isNew: PropTypes.bool,
    alt: PropTypes.string,
    url: PropTypes.string,
  };

  render() {
    const { src, isNew, alt, url } = this.props;
    const newPng = require('./assets/new.png');

    return (
      <Wrapper href={url}>
        <Img src={src} alt={alt} />
        {isNew ? (<FlagIcon src={newPng} />) : ''}
      </Wrapper>
    );
  }
}
