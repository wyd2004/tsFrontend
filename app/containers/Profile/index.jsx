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
    this.props.loadSubscription();
    this.props.loadVip();
    this.props.loadPeople();
  }
  render() {
    const { user, subs, vip, people } = this.props;
    console.log(subs, vip, people);
    const { expire_datetime: expire, nickname } = user;
    const isVip = expire !== false;
    const mockCollectionData = [
      { title: 'a', id: 1 }, { title: 'a', id: 4 },
      { title: 'a', id: 2 }, { title: 'a', id: 5 }, { title: 'a', id: 7 },
      { title: 'a', id: 3 }, { title: 'a', id: 6 },
    ];
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
          <Header isVip={isVip} otherText={moment(expire).format('YYYY/MM/DD')} isSelf userName={nickname} toRenew={() => console.log(123)} />
        </Card>
        <Title icon="vip">订阅栏目</Title>
        <Card>
          <Wrap>
            {mockCollectionData.map((album) => <Album key={album.id} {...album} />)}
            {mockCollectionData.length === 7 && <Album key="All" title="查看全部" image={addPic} to="/subscription" />}
          </Wrap>
        </Card>
        <Title icon="vip">会员栏目</Title>
        <Card>
          <Wrap>
            {mockCollectionData.map((album) => <Album key={album.id} {...album} />)}
            {mockCollectionData.length === 7 && <Album key="All" title="查看全部" image={addPic} to="/vip" />}
          </Wrap>
        </Card>
        <Title icon="vip">按主播查看</Title>
        <Card>
          <Wrap>
            {mockCollectionData.map((host) => <People key={host.id} {...host} />)}
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
