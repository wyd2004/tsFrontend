/* global COLOR_1 COLOR_3 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Player from 'components/Player';
import { selectPodcast, selectHistory } from './selectors';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';

import * as playActions from './actions';

import PodcastItem from 'components/PodcastItem';
import Title from 'components/Title';
import Infinite from 'components/Infinite';

const mockList = [
  { id: 1, title: '强迫性新闻不是强迫性行为', desc: '大脑洞', rank: 23, time: 75, date: Date.now, coast: 6, isBuy: true },
  { id: 2, title: '强迫性新闻不是强迫性行为', desc: '大脑洞', rank: 23, time: 75, date: Date.now, coast: 6 },
  { id: 3, title: '强迫性新闻不是强迫性行为', desc: '大脑洞', rank: 23, time: 75, date: Date.now, coast: 6 },
  { id: 4, title: '强迫性新闻不是强迫性行为', desc: '大脑洞', rank: 23, time: 75, date: Date.now, coast: 6 },
  { id: 5, title: '强迫性新闻不是强迫性行为', desc: '大脑洞', rank: 23, time: 75, date: Date.now, coast: 6 },
];

export class Play extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    const { id } = this.props.params;
    this.props.loadPodcast(id);
    this.props.loadHistory(id);
  }
  handleRefresh = () => {
    console.log('refresh');
  }
  render() {
    const { podcast, history, subscribe } = this.props;
    console.log(podcast, history);

    const mockPodcast = {
      srcShort: 'http://game.gtimg.cn/images/mhzx/web201610/mp3/wangsulong.mp3',
      src: 'http://game.gtimg.cn/images/mhzx/web201610/mp3/wangsulong.mp3',
      ablum: 'http://p4.music.126.net/xomieFDiQZkFO3bebFAuDg==/103354093026187.jpg?param=130y130',
      canPlay: false,
      time: 1233,
      title: '本期：上班拍女同事的照片是否违法',
      date: 123123412,
      serial: '失色静安寺',
      desc: '会说相声的拍照片儿的不是一个好搓屎的。”——@二宝-杨毅',
      people: '糖蒜',
      coast: 123,
    };
    return (
      <div>
        <Helmet
          title="播放页"
          meta={[
            { name: 'description', content: '糖蒜广播-播放页' },
          ]}
        />
        <Player {...mockPodcast} onSubscribe={subscribe} />
        <Title icon="before">往期广播</Title>
        <Infinite onRefresh={this.handleRefresh}>
          {mockList.map((item) => <PodcastItem key={item.id} {...item} />)}
        </Infinite>
      </div>
    );
  }
}
Play.propTypes = {
  loadPodcast: PropTypes.func,
  loadHistory: PropTypes.func,
  subscribe: PropTypes.func,
  podcast: PropTypes.object,
  history: PropTypes.object,
  params: PropTypes.shape({
    id: PropTypes.string,
  }),

};
const mapStateToProps = createStructuredSelector({
  podcast: selectPodcast(),
  history: selectHistory(),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(playActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Play);
