/* global COLOR_1 COLOR_2 COLOR_3 COLOR_4 */
import React, { PureComponent, PropTypes } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  overflow: hidden;
`;

const Avatar = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 74px;
  float: left;
  margin-right: 20px;
  display: block;
  position: relative;
`;

const Name = styled.p`
  font-size: 14px;
  margin-top: 0px;
`;

const Desc = styled.p`
  font-size: 11px;
  margin-bottom: 0;
`;

const Vip = styled.span`
  height: 20px;
  width: 20px;
  position: absolute;
  display: block;
  background-image: url(${require('../Avatar/assets/vip.png')});
  background-size: 20px;
  top: 78px;
  left: 78px;
`;
export default class PeopleProfile extends PureComponent {
  static propTypes = {
    isVip: PropTypes.bool,
    avatar: PropTypes.string,
    desc: PropTypes.string,
    username: PropTypes.string,
  };

  render() {
    const { isVip, avatar, desc, username } = this.props;

    return (
      <Wrapper>
        <Avatar isVip={isVip} src={avatar} />
        { isVip && <Vip /> }
        <Name>{username}</Name>
        <Desc>{desc}</Desc>
      </Wrapper>
    );
  }
}
