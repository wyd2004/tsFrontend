/* global COLOR_1 COLOR_3 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import selectProfile from './selectors';

import Card from 'components/Card';
import Title from 'components/Title';

import MemberRights from 'components/MemberRights';
import MembershipList from 'components/MembershipList';
import Header from 'components/Header';
import Collection from 'components/Collection';

export class Special extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const mockMemberList = [
      { id: 1, title: '糖蒜广播会员sad ', desc: '1231231', limit: '1年sd', price: 1000 },
      { id: 2, title: '糖蒜广播会员123', desc: '', limit: '1年', price: 10 },
      { id: 3, title: '糖蒜广播会员1', desc: '', limit: '1年', price: 10 },
      { id: 4, title: '糖蒜广播会员', desc: '现在订阅就送超值大礼包', limit: '1年', price: 10 },
    ];
    const mockCollectionData = [{ text: 'a' }, { text: 'a' }, { text: 'a' }, { text: 'a' }, { text: 'a' }, { text: 'a' }];
    return (
      <div>
        <Helmet
          title="个人中心"
          meta={[
            { name: 'description', content: '糖蒜广播-个人中心' },
          ]}
        />
        <Card>
          <Header isVip otherText={'2015-06-13'} isSelf userName={'xxxx'} toRenew={() => console.log(123)} />
        </Card>
        <Title icon="vip">订阅栏目</Title>
        <Card>
          <Collection type={'album'} data={mockCollectionData} />
        </Card>
        <Title icon="vip">会员栏目</Title>
        <Card>
          <Collection type={'album'} data={mockCollectionData} />
        </Card>
        <Title icon="vip">按主播查看</Title>
        <Card>
          <Collection type={'avatar'} data={mockCollectionData} />
        </Card>
        <Title icon="vip">开通会员</Title>
        <MembershipList data={mockMemberList} />
        <Title icon="rights">会员特权</Title>
        <MemberRights />
      </div>
    );
  }
}

const mapStateToProps = selectProfile();

function mapDispatchToProps(dispatch) {
  return {
    // onSearch: (content) => dispatch(searchPodcast(content)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Special);
