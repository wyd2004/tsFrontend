/* global COLOR_1 COLOR_3 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import moment from 'moment';
import { selectCurrentUser } from 'containers/App/selectors';

import * as profileActions from './actions';
import { selectSubscription, selectVip, selectPeople } from './selectors';

import Card from 'components/Card';
import Title from 'components/Title';
import Album from 'components/Album';
import People from 'components/People';

import Header from 'components/Header';
const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export class Profile extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    const { subs, vip, people } = this.props;
    subs.results.length === 0 && this.props.loadSubscription();
    vip.results.length === 0 && this.props.loadVip();
    people.results.length === 0 && this.props.loadPeople();
  }
  render() {
    const { user, subs, vip, people } = this.props;
    const { expire_datetime: expire, nickname, avatar } = user;
    const { results: peopleResults } = people;
    const { results: subsResults } = subs;
    const { results: vipResults } = vip;
    const isVip = expire && true;

    const addPic = require('./add.png');
    return (
      <div>
        <Helmet
          title="个人中心"
          meta={[
            { name: 'description', content: '糖蒜广播-个人中心' },
          ]}
        />
        <Card>
          <Header isVip={isVip} avatarSrc={avatar} otherText={expire && `${moment(expire).format('YYYY/MM/DD')}`} isSelf userName={nickname} />
        </Card>
        <Title icon="vip">订阅栏目</Title>
        <Card>
          <Wrap>
            {subsResults.map((album) => <Album key={album.id} {...album} />)}
            {subsResults.length === 7 && <Album key="All" title="查看全部" image={addPic} to="/subscription" />}
          </Wrap>
        </Card>
        <Title icon="vip">会员栏目</Title>
        <Card>
          <Wrap>
            {vipResults.map((album) => <Album key={album.id} {...album} />)}
            {vipResults.length === 7 && <Album key="All" title="查看全部" image={addPic} to="/vip" />}
          </Wrap>
        </Card>
        <Title icon="vip">按主播查看</Title>
        <Card>
          <Wrap>
            {peopleResults.map((host) => <People key={host.id} {...host} />)}
          </Wrap>
        </Card>
      </div>
    );
  }
}
Profile.propTypes = {
  user: React.PropTypes.object,
  subs: React.PropTypes.object,
  vip: React.PropTypes.object,
  people: React.PropTypes.object,
  loadSubscription: React.PropTypes.func,
  loadVip: React.PropTypes.func,
  loadPeople: React.PropTypes.func,
};
const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser(),
  subs: selectSubscription(),
  vip: selectVip(),
  people: selectPeople(),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...profileActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
