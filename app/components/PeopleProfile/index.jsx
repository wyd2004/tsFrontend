/* global COLOR_1 COLOR_2 COLOR_3 COLOR_4 */
import React, { PureComponent, PropTypes } from 'react';
import styled from 'styled-components';
import rem from 'utils/pxtorem';

const Wrapper = styled.div`
  overflow: hidden;
`;

const Avatar = styled.img`
  width: ${rem('75px')};
  height: ${rem('75px')};
  border-radius: ${rem('74px')};
  float: left;
  margin-right: ${rem('20px')};
  display: block;
  position: relative;
`;

const Name = styled.p`
  font-size: ${rem('14px')};
  margin-top: ${rem('0px')};
`;

const Description = styled.p`
  font-size: ${rem('11px')};
  margin-bottom: 0;
`;

const Vip = styled.span`
  height: ${rem('20px')};
  width: ${rem('20px')};
  position: absolute;
  display: block;
  background-image: url(${require('../Avatar/assets/vip.png')});
  background-size: ${rem('20px')};
  top: ${rem('78px')};
  left: ${rem('78px')};
`;
export default class PeopleProfile extends PureComponent {
  static propTypes = {
    isVip: PropTypes.bool,
    image: PropTypes.string,
    description: PropTypes.string,
    name: PropTypes.string,
  };

  render() {
    const { isVip, image, description, name } = this.props;

    return (
      <Wrapper>
        <Avatar isVip={isVip} src={image} />
        { isVip && <Vip /> }
        <Name>{name}</Name>
        <Description>{description}</Description>
      </Wrapper>
    );
  }
}
