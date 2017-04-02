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
import Title, { PLink } from 'components/Title';

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
    const { expire_datetime: expire, nickname, avatar } = user;
    const isVip = expire && true;
    return (
      <div>
        <Helmet
          title="个人中心"
          meta={[
            { name: 'description', content: '糖蒜广播-个人中心' },
          ]}
        />
        <Card>
          <Header isVip={isVip} isSelf avatarSrc={avatar} otherText={`${moment(expire).format('YYYY/MM/DD')}`} userName={nickname} />
        </Card>
        <Title icon="vip">开通会员</Title>
        {projects.map((item) => <Membership key={item.id} onClick={this.buy(item.id)} {...item} />)}
        <Title icon="rights">会员特权</Title>
        <MemberRights />
        <PLink to="/protocol">《全占会员 服务使用协议》</PLink>
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
