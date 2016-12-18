/* global COLOR_1 COLOR_2 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import rem from 'utils/pxtorem';

import { selectPodcast } from './selectors';
import { loadPodcast, requireOrder } from './actions';

import PodcastItem from 'components/PodcastItem';
import CardOrigin from 'components/Card/CardWrap';
import Button from 'components/PodcastItem/Button';
import Title from 'components/Title';

const Card = styled(CardOrigin)`
  margin: 0;
`;

const Wrapper = styled.div`
  height: 100vh;
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
    const { params } = this.props;
    const { id } = params;
    this.props.loadPodcast(id);
  }
  handlePay = () => {
    const { params } = this.props;
    const { id } = params;
    this.props.requireOrder(id);
  }
  render() {
    const { item } = this.props;
    return (
      <Wrapper>
        <Helmet
          title="节目购买"
          meta={[
            { name: 'description', content: '糖蒜广播-节目购买' },
          ]}
        />
        <Title icon="buy">节目购买</Title>
        <PodcastItem {...item} />
        <Tips>
          <Desc>单月会员只要￥60！！还有多种特权</Desc>
          <Link to="/payBundle"><Button>我还是买会员吧</Button></Link>
        </Tips>
        <PayButton onClick={this.handlePay}>去支付</PayButton>
      </Wrapper>
    );
  }
}
Buy.propTypes = {
  item: PropTypes.object,
  params: PropTypes.object,
  loadPodcast: PropTypes.func,
  requireOrder: PropTypes.func,
};

const mapStateToProps = selectPodcast();

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadPodcast, requireOrder }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Buy);
