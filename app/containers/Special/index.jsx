/* global COLOR_1 COLOR_3 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import selectProfile from './selectors';

import Card from 'components/Card/CardWrapS';

import AlbumHeader from 'components/AlbumHeader';
import PodcastItem from 'components/PodcastItem';

export class Special extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const mockList = [
      { id: 1, title: '强迫性新闻不是强迫性行为', desc: '大脑洞', rank: 23, time: 75, date: Date.now, coast: 6, searchValue: '大脑' },
      { id: 3, title: '强迫性新闻不是强迫性行为', desc: '大脑洞', rank: 23, time: 75, date: Date.now, coast: 6, searchValue: '大脑' },
      { id: 4, title: '强迫性新闻不是强迫性行为', desc: '大脑洞', rank: 23, time: 75, date: Date.now, coast: 6, searchValue: '大脑' },
      { id: 5, title: '强迫性新闻不是强迫性行为', desc: '大脑洞', rank: 23, time: 75, date: Date.now, coast: 6, searchValue: '大脑' },
    ];
    const ablumInfo = {
      image: 'http://p4.music.126.net/xomieFDiQZkFO3bebFAuDg==/103354093026187.jpg?param=130y130',
      title: '时间卡位',
      amount: 123,
      desc: '他是法国波旁王朝国王，也是世界历史上在位时间最长的君主之一。5岁那年被母后安娜抱上了国王宝座，开始了长达72年的漫长……',
    };
    const { image, title, amount, desc } = ablumInfo;
    return (
      <div>
        <Helmet
          title="专辑列表"
          meta={[
            { name: 'description', content: '糖蒜广播-专辑列表' },
          ]}
        />
        <Card>
          <AlbumHeader image={image} title={title} amount={amount} desc={desc} />
        </Card>
        {mockList.map((item) => <PodcastItem {...item} />) }
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
