/* global COLOR_1 COLOR_2 */

import React from 'react';
import { Link, browserHistory } from 'react-router';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as payActions from './actions';
import { selectPay } from './selectors';
import rem from 'utils/pxtorem';

import styled from 'styled-components';
import { getSearchObj } from 'utils/tools';

const Wrapper = styled.div`
  height: 100%;
  text-align: center;
  padding-top: 190px;
`;

const Button = styled.div`
`;
const Icon = styled.div`
  background-image: url(${require('./assets/icon.png')});
  height: ${rem('61px')};
  width: ${rem('61px')};
  background-size: 100%;
  margin: auto;

  margin-bottom: 30px;
`;
export class Pay extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    const { location } = this.props;
    const { type, id } = getSearchObj(location.search);
    this.props.requireOrder({ payType: type, id });
    if ((process.env.NODE_ENV === 'development' || process.env.NODE_ENV_PAY === 'test') && window.location.pathname === '/pay') {
      window.location.href = `/test/pay/${window.location.search}`;
    }
  }

  render() {
    const { payState } = this.props;
    const node = {
      success: (
        <div>
          <Icon />支付成功！您现在可以收听节目了！
          <Button onClick={() => browserHistory.goBack()}>返回</Button>
        </div>
      ),
      failed: (
        <div>
          支付失败！请返回重试！
          <Button onClick={() => browserHistory.goBack()}>返回</Button>
        </div>
      ),
    };
    return (
      <Wrapper>
        <Helmet
          title="支付结果"
          meta={[
            { name: 'description', content: '糖蒜广播-支付结果' },
          ]}
        />
        {node[payState] || '支付中...'}
      </Wrapper>
    );
  }
}
Pay.propTypes = {
  location: React.PropTypes.object,
  payState: React.PropTypes.object,
  requireOrder: React.PropTypes.func,
};
const mapStateToProps = createStructuredSelector({
  payState: selectPay(),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...payActions }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Pay);
