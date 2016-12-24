/* global COLOR_1 COLOR_3 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import { selectCurrentUser } from 'containers/App/selectors';
import { createStructuredSelector } from 'reselect';

import { loadProject } from './actions';
import selectProject from './selectors';
import { PAY_TYPE } from 'containers/Pay/actions';

import Card from 'components/Card';
import Title from 'components/Title';

import MemberRights from 'components/MemberRights';
import Membership from 'components/Membership';
import Header from 'components/Header';

export class Project extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    const { projects } = this.props;
    projects.length === 0 && this.props.loadProject();
  }
  buy = (id) => (e) => {
    e.preventDefault();
    browserHistory.push(`/pay?type=${PAY_TYPE.project}&id=${id}`);
  }

  render() {
    const { user, projects } = this.props;
    const { expire_datetime: expire, nickname } = user;
    const isVip = expire !== false;
    return (
      <div>
        <Helmet
          title="个人中心"
          meta={[
            { name: 'description', content: '糖蒜广播-个人中心' },
          ]}
        />
        <Card>
          <Header isVip={isVip} otherText={expire ? `会员截止日期：${moment(expire).format('YYYY/MM/DD')}` : '非会员'} userName={nickname} />
        </Card>
        <Title icon="vip">开通会员</Title>
        {projects.map((item) => <Membership key={item.id} onClick={this.buy(item.id)} {...item} />)}
        <Title icon="rights">会员特权</Title>
        <MemberRights />
      </div>
    );
  }
}
Project.propTypes = {
  user: React.PropTypes.object,
  projects: React.PropTypes.array,
  loadProject: React.PropTypes.func,
};
const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser(),
  projects: selectProject(),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadProject }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);
