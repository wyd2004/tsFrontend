import React, { PureComponent, PropTypes } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

const Wrapper = styled(Link)`
  display: inline-block;
  position: relative;
`;

const Img = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden;
`;

const VipIcon = styled.img`
  position: absolute;
  width: 17px;
  height: 17px;
  right: 0px;
  bottom: 3px;
`;

export default class Avatar extends PureComponent {
  static defaultProps = {
    isVip: false,
    alt: '头像',
    src: require('./assets/avatar.png'),
  };

  static propTypes = {
    src: PropTypes.string,
    isVip: PropTypes.bool,
    alt: PropTypes.string,
  };

  render() {
    const { src, isVip, alt } = this.props;
    const vipPng = require('./assets/vip.png');

    return (
      <Wrapper>
        <Img src={src} alt={alt} />
        {isVip ? (<VipIcon src={vipPng} />) : ''}
      </Wrapper>
    );
  }
}
