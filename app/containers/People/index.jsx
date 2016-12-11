/* global COLOR_1 COLOR_3 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectProfile from './selectors';

import Card from 'components/Card';

import PodcastItem from 'components/PodcastItem';
import PeopleProfile from 'components/PeopleProfile';


export class People extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const mockList = [
      { id: '1', title: '强迫性新闻不是强迫性行为', desc: '大脑洞', rank: 23, time: 75, date: Date.now, coast: 6, isBuy: true },
      { id: '2', title: '强迫性新闻不是强迫性行为', desc: '大脑洞', rank: 23, time: 75, date: Date.now, coast: 6 },
      { id: '3', title: '强迫性新闻不是强迫性行为', desc: '大脑洞', rank: 23, time: 75, date: Date.now, coast: 6 },
      { id: '4', title: '强迫性新闻不是强迫性行为', desc: '大脑洞', rank: 23, time: 75, date: Date.now, coast: 6 },
      { id: '5', title: '强迫性新闻不是强迫性行为', desc: '大脑洞', rank: 23, time: 75, date: Date.now, coast: 6 },
    ];
    return (
      <div>
        <Helmet
          title="个人中心"
          meta={[
            { name: 'description', content: '糖蒜广播-个人中心' },
          ]}
        />
        <Card>
          <PeopleProfile
            isVip
            avatar={'http://cn.gravatar.com/avatar/c78af66f07877a04a35e759acc791b7a?s=50'}
            desc={'他是法国波旁王朝国王，也是世界历史上在位时间最长的君主之一。5岁那年被母后安娜抱上了国王宝座，开始了长达72年的漫长帝王生涯。'}
            username={'大王王大大王'}
          />
        </Card>
        {mockList.map((item) => <PodcastItem {...item} />)}
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

export default connect(mapStateToProps, mapDispatchToProps)(People);
