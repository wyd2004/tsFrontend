/* global COLOR_3 */

import React, { Component } from 'react';
import styled from 'styled-components';

import List from 'components/List';
import Player from 'components/Player';
import SearchBar from 'components/SearchBar';
import UserButton from 'components/UserButton';
import MemberRights from 'components/MemberRights';
import PodcastProfile from 'components/PodcastProfile';
import MembershipList from 'components/MembershipList';

const Wrapper = styled.div`

`;
export default class App extends Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    const mockList = [
      { id: '1233sdasf', title: '强迫性新闻不是强迫性行为', desc: '大脑洞', rank: 23, time: 75, date: Date.now, coast: 6, searchValue: '大脑' },
    ];
    const mockPodcast = {
      srcShort: 'http://120.25.232.11/podcast/episode/3/full_file/',
      src: 'http://120.25.232.11/podcast/episode/3/full_file/',
      ablum: 'http://p4.music.126.net/xomieFDiQZkFO3bebFAuDg==/103354093026187.jpg?param=130y130',
      canPlay: true,
      time: 1233,
    };
    const mockMemberList = [
      { id: 1, title: '糖蒜广播会员', desc: '', limit: '1年', price: 10 },
      { id: 2, title: '糖蒜广播会员', desc: '', limit: '1年', price: 10 },
      { id: 3, title: '糖蒜广播会员', desc: '', limit: '1年', price: 10 },
      { id: 4, title: '糖蒜广播会员', desc: '现在订阅就送超值大礼包', limit: '1年', price: 10 },
    ];
    return (
      <Wrapper>
        <h1>组件集合：</h1>
        <PodcastProfile {...mockList[0]} />
        <MembershipList data={mockMemberList} />
        <MemberRights />
        <UserButton />
        <SearchBar onSearch={(content) => console.log(content)} />
        <Player {...mockPodcast} />
        <List data={mockList} />
      </Wrapper>
    );
  }
}
