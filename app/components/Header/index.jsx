/* global COLOR_1 COLOR_2 COLOR_3 COLOR_4 */
import React, { PureComponent, PropTypes } from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';
import rem from 'utils/pxtorem';

import Avatar from '../Avatar';

const Wrapper = styled.div`
  display: flex;
`;

const AvatarWrap = styled.span`
  display: inline-block;
  min-width: ${rem('64px')};
  margin-right: ${rem('20px')};
`;

const TextWrap = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const UserName = styled.span`
  font-size: ${rem('14px')};
  margin-bottom: ${rem('8px')};
  color: ${COLOR_2};
`;

const OtherText = styled.span`
  font-size: ${rem('12px')};
  color: ${COLOR_3};
`;

const RenewWrap = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: ${rem('50px')};
`;

const RenewIcon = styled.img`
  display: inline-block;
  margin-left: ${rem('13px')};
  margin-bottom: ${rem('5px')};
  width: ${rem('23px')};
  height: ${rem('18px')};
`;

const RenewText = styled.span`
  color: ${COLOR_1};
  font-size: ${rem('12px')};
`;

export default class Header extends PureComponent {
  static propTypes = {
    userName: PropTypes.string.isRequired,
    otherText: PropTypes.string,
    avatarSrc: PropTypes.string,
    avatarAlt: PropTypes.string,
    userUrl: PropTypes.string,
    isSelf: PropTypes.bool,
    isVip: PropTypes.bool,
  };

  render() {
    const { userUrl, isVip, avatarSrc, avatarAlt, otherText, userName, isSelf } = this.props;
    let headerText;
    if (isSelf) {
      if (otherText) {
        headerText = `会员截止日期：${otherText}`;
      } else {
        headerText = '非会员';
      }
    } else {
      headerText = otherText;
    }

    return (
      <Wrapper>
        <AvatarWrap>
          <Avatar url={userUrl} isVip={isVip} src={avatarSrc} alt={avatarAlt} />
        </AvatarWrap>
        <TextWrap>
          <UserName>{userName}</UserName>
          <OtherText>{headerText}</OtherText>
        </TextWrap>
        {isSelf ? <RenewWrap to="/project"><RenewIcon src={require('./assets/renew.png')}></RenewIcon><RenewText>续费</RenewText></RenewWrap> : null}
      </Wrapper>
    );
  }
}
