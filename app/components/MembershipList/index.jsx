/* global COLOR_1 COLOR_2 COLOR_3 COLOR_4 */

import React from 'react';
import styled from 'styled-components';
import CardWrapS from 'components/Card/CardWrapS';
import Button from 'components/ListItem/Button';

const MemberListWrapper = styled.ul`
  padding: 0;
  list-style: none;
  font-size: 13px;
`;
const Title = styled.span`
  color: ${COLOR_2};
  padding: 0;
  width: 125px;
  display: inline-block;
`;
const Item = styled.div`
  padding-top: 3px;
`;
const Limit = styled.span`
  color: ${COLOR_3};
  width: 80px;
  display: inline-block;
`;
const Price = styled.span`
  color: ${COLOR_1};
  width: 40px;
  display: inline-block;
`;
const Desc = styled.p`
  color: ${COLOR_3};
  margin: 0;
`;
const ButtonFloat = styled(Button)`
  float: right;
`;
export default class MembershipList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /* eslint-disable react/no-unused-prop-types */
  static propTypes = {
    data: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.number,
      title: React.PropTypes.string,
      desc: React.PropTypes.string,
      limit: React.PropTypes.string,
      price: React.PropTypes.number,
    })),
    onSelected: React.PropTypes.func,
  }
  /* eslint-disable react/no-unused-prop-types */
  handleBuy = (id) => (
    (e) => {
      e.preventDefault();
      this.onSelected(id);
    }
  )
  render() {
    const { data } = this.props;
    return (
      <MemberListWrapper>
        {data.map(({ id, title, desc, limit, price }) =>
          <CardWrapS key={id}>
            <ButtonFloat onClick={this.handleBuy(id)}>购买</ButtonFloat>
            <Item>
              <Title>{title}</Title>
              <Limit>{limit}</Limit>
              <Price>￥{price}</Price>
            </Item>
            <Desc>{desc}</Desc>
          </CardWrapS>
        )}
      </MemberListWrapper>
    );
  }
}
