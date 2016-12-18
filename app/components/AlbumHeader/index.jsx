/* global COLOR_1 COLOR_2 COLOR_3 COLOR_4 */
import React, { PureComponent, PropTypes } from 'react';
import styled from 'styled-components';
import rem from 'utils/pxtorem';


const Wrapper = styled.div`
  display: flex;
`;

const AvatarWrap = styled.span`
  display: inline-block;
  min-width: ${rem('64px')};
  margin-right: ${rem('20px')};
`;

const Avatar = styled.img`
  display: inline-block;
  height: ${rem('86px')};
  width: ${rem('86px')};
  border-radius: ${rem('2px')};
`;

const TextWrap = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.span`
  font-size: ${rem('14px')};
  color: ${COLOR_2};
`;

const Amount = styled.span`
  font-size: ${rem('11px')};
  margin-bottom: ${rem('5px')};
  color: ${COLOR_3};
`;

const Desc = styled.div`
  font-size: ${rem('11px')};
  color: ${COLOR_2};
`;


export default class Header extends PureComponent {
  static propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string,
    amount: PropTypes.number,
    desc: PropTypes.string,
  };
  render() {
    const { image, title, amount, desc } = this.props;
    return (
      <Wrapper>
        <AvatarWrap>
          <Avatar src={image} alt={title} />
        </AvatarWrap>
        <TextWrap>
          <Title>{title}</Title>
          <Amount>{amount}期节目</Amount>
          <Desc>{desc}</Desc>
        </TextWrap>
      </Wrapper>
    );
  }
}
