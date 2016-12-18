/* global COLOR_1 COLOR_2 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import rem from 'utils/pxtorem';

import CardOrigin from 'components/Card/CardWrap';
import Button from 'components/PodcastItem/Button';
import Title from 'components/Title';

const Card = styled(CardOrigin)`
  margin: 0;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Desc = styled.p`
  color: ${COLOR_2};

`;
const Tips = styled(Card)`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
const PayButton = styled(Button)`
  width: 100%;
  display: inline-block;
  text-align: center;
  line-height: ${rem('44px')};
  padding: 0;
`;
export class Buy extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
  }
  handlePay = () => {

  }
  render() {
    const mockData = { id: 123, title: '强迫性新闻不是强迫性行为', desc: '大脑洞', rank: 23, time: 75, date: Date.now, coast: 6, buying: true };
    return (
      <Wrapper>
        <Helmet
          title="节目购买"
          meta={[
            { name: 'description', content: '糖蒜广播-节目购买' },
          ]}
        />
        <Title icon="buy">节目购买</Title>
        <Tips>
          <Desc>单月会员只要￥60！！还有多种特权</Desc>
          <Link to="/profile"><Button>我还是买会员吧</Button></Link>
        </Tips>
        <PayButton onClick={this.handlePay}>去支付</PayButton>
      </Wrapper>
    );
  }
}
Buy.propTypes = {
  podcast: PropTypes.shape({
    id: React.PropTypes.number,
    title: React.PropTypes.string,
    desc: React.PropTypes.string,
    coast: React.PropTypes.number,
    isBuy: React.PropTypes.bool,
    ablumPicture: React.PropTypes.string,
  }),

};

export default Buy;
