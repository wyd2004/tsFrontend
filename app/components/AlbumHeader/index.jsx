/* global COLOR_1 COLOR_2 COLOR_3 COLOR_4 */
import React, { PureComponent, PropTypes } from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  display: flex;
`;

const AvatarWrap = styled.span`
  display: inline-block;
  min-width: 64px;
  margin-right: 20px;
`;

const Avatar = styled.img`
  display: inline-block;
  height: 86px;
  width: 86px;
  border-radius: 2px;
`;

const TextWrap = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.span`
  font-size: 14px;
  color: ${COLOR_2};
`;

const Amount = styled.span`
  font-size: 11px;
  margin-bottom: 5px;
  color: ${COLOR_3};
`;

const Desc = styled.div`
  font-size: 11px;
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
