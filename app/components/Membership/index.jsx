/* global COLOR_1 COLOR_2 COLOR_3 COLOR_4 */

import React from 'react';
import styled from 'styled-components';
import rem from 'utils/pxtorem';
import CardWrapS from 'components/Card/CardWrapS';
import Button from 'components/PodcastItem/Button';

const Wrapper = styled(CardWrapS)`
  font-size: ${rem('13px')};
`;
const Title = styled.span`
  color: ${COLOR_2};
  padding: 0;
  width: ${rem('125px')};
  display: inline-block;
`;
const Item = styled.div`
  padding-top: ${rem('3px')};
`;
const Limit = styled.span`
  color: ${COLOR_3};
  width: ${rem('80px')};
  display: inline-block;
`;
const Price = styled.span`
  color: ${COLOR_1};
  width: ${rem('40px')};
  display: inline-block;
`;
const Desc = styled.p`
  color: ${COLOR_3};
  margin: 0;
`;
const ButtonFloat = styled(Button)`
  float: right;
`;
export default class Membership extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /* eslint-disable react/no-unused-prop-types */
  static propTypes = {
    title: React.PropTypes.string,
    desc: React.PropTypes.string,
    limit: React.PropTypes.string,
    price: React.PropTypes.string,
    onClick: React.PropTypes.func,
  }

  render() {
    const { title, desc, limit, price } = this.props;
    return (
      <Wrapper onClick={this.props.onClick}>
        <ButtonFloat>购买</ButtonFloat>
        <Item>
          <Title>{title}</Title>
          <Limit>{limit}</Limit>
          <Price>￥{price}</Price>
        </Item>
        <Desc>{desc}</Desc>
      </Wrapper>
    );
  }
}
