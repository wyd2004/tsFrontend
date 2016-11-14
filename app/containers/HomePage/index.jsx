/* global COLOR_3 */

import React, { Component } from 'react';
import styled from 'styled-components';
import List from 'components/List';
import Player from 'components/Player';
import SearchBar from 'components/SearchBar';
import UserButton from 'components/UserButton';
import MemberRights from 'components/MemberRights';

const Wrapper = styled.div`

`;
export default class App extends Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    const mockList = [
      { id: '1233sdasf', title: '强迫性新闻不是强迫性行为', desc: '大脑洞', rank: 23, time: 75, date: Date.now, coast: 5 },
    ];
    const mockPodcast = {
      srcShort: 'http://game.gtimg.cn/images/mhzx/web201610/mp3/wangsulong.mp3',
      src: 'http://game.gtimg.cn/images/mhzx/web201610/mp3/wangsulong.mp3',
      ablum: 'http://p4.music.126.net/xomieFDiQZkFO3bebFAuDg==/103354093026187.jpg?param=130y130',
      canPlay: true,
      time: 1233,
    };
    return (
      <Wrapper>
        <h1>组件集合：</h1>
        <MemberRights />
        <UserButton />
        <SearchBar onSearch={(content) => console.log(content)} />
        <Player {...mockPodcast} />
        <List data={mockList} />
      </Wrapper>
    );
  }
}
