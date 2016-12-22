/* global COLOR_1 COLOR_2 COLOR_3 */
import React from 'react';
import styled from 'styled-components';
import rem from 'utils/pxtorem';
import { Link } from 'react-router';
import { convDate } from 'utils/tools';

import ProgressBar from 'components/ProgressBar';
import Card from 'components/Card';

import { Button } from 'components/PodcastItem/style';

const Wrapper = styled.div`
  & audio {
    display: none;
  }
`;

const Ablum = styled.div`
  width: 100%;
  height: auto;
  background: ${COLOR_3};
  & img {
    width: 100%;
  }
`;
const Actions = styled.div`
  text-align: center;
`;
const Prev = styled.span`
  background-image: url(${require('./assets/prev.png')});
  background-size: ${rem('25px')} ${rem('25px')};
  height: ${rem('25px')};
  width: ${rem('25px')};
  display: inline-block;
  position: relative;
  top: -${rem('17px')};
`;
const Next = styled(Prev)`
  background: url(${require('./assets/next.png')});
  background-size: ${rem('25px')} ${rem('25px')};
`;
const PlayButton = styled.span`
  background-image: url(${require('./assets/play.png')});
  background-size: ${rem('120px')} ${rem('60px')};
  background-position-x: ${(props) => !props.played ? 0 : -60}px;
  height: ${rem('60px')};
  width: ${rem('60px')};
  display: inline-block;
  margin: 0 ${rem('40px')};
`;
const StyledLink = styled(Link)`
  color: ${COLOR_1};
`;
const Card2 = styled.div`
  background: white;
  border-radius: ${rem('2px')};
  margin: ${rem('6px')};
  position: relative;
  font-size: ${rem('13px')};
  padding-top: ${rem('5px')};
  padding-bottom: ${rem('5px')};
  text-align: center;
`;
const Title = styled.h1`
  font-size: ${rem('13px')};
  color: ${COLOR_2};
  font-weight: normal;
  margin-top: 0;
`;
const Info = styled.p`
  color: ${COLOR_3};
  font-size: ${rem('11px')};
  margin: 0;
`;
const Label = styled.span`
  display: inline-block;
  ${''/* width: ${rem('60px')};*/}
  text-align: right;
`;
const Coast = styled.span`
  display: inline-block;
  padding-left: ${rem('15px')};
  background-image: url(${require('./assets/coast.png')});
  background-size: ${rem('14px')};
  background-position-y: center;
  margin-right: ${rem('20px')};
  margin-bottom: ${rem('6px')};
`;
const Date = styled(Coast)`
  background-image: url(${require('../PodcastItem/assets/time.png')});
`;
const Subscribe = styled(Button)`
  float: right;
`;

class Player extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0,
      loaded: false,
      played: false,
    };
  }
  handleLoaded = () => {
    this.setState({
      ...this.state,
      loaded: true,
      canPlay: true,
    });
  }
  handlePlay = () => {
    let played;
    if (this.audio.paused) {
      this.audio.play();
      played = true;
    } else {
      this.audio.pause();
      played = false;
    }
    this.setState({
      ...this.state,
      played,
    });
  }
  handleTimeUpdate = () => {
    this.setState({
      ...this.state,
      currentTime: this.audio.currentTime,
    });
  }
  handleProgressUpdate = (newProgress) => {
    this.audio.currentTime = (newProgress / 100) * this.audio.duration;
  }
  handleSub = () => {
    const { id, isSub } = this.props;
    const state = isSub ? 0 : 1;
    this.props.onSubscribe(id, state);
  }
  render() {
    const { id, srcShort, src, ablum, canPlay, time: totalTime, title, date, serial, desc, people, coast, isSub } = this.props;
    const { currentTime, loaded, played } = this.state;

    return (
      <Wrapper>
        {/* 此处的ref用法请参考：https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md */}
        <audio
          ref={(c) => { this.audio = c; }}
          src={canPlay ? src : srcShort} preload
          onCanPlay={this.handleLoaded}
          onTimeUpdate={this.handleTimeUpdate}
        />
        <Card>
          <Ablum><img src={ablum || require('./assets/default.jpg')} alt="节目封面" /></Ablum>
          <ProgressBar
            currentTime={currentTime}
            totalTime={totalTime}
            ready={loaded}
            onProgressUpdate={this.handleProgressUpdate}
          />
          <Actions>
            <Prev></Prev>
            <PlayButton onClick={this.handlePlay} played={played}></PlayButton>
            <Next></Next>
          </Actions>
        </Card>
        <Card2>试听5分钟，完整收听请<StyledLink to="/profile">开通会员</StyledLink>或<StyledLink to={`/buy/episode/${id}`}>购买本节目</StyledLink></Card2>
        <Card>
          { !canPlay && <Subscribe onClick={this.handleSub}>{isSub ? '已订阅' : '订阅'}</Subscribe> }
          <Title>{title}</Title>
          <Info>
            <Coast>{coast}</Coast>
            <Date>{convDate(date)}</Date>
          </Info>
          <Info><Label>主持人：</Label>{people}</Info>
          <Info><Label>栏目：</Label>{serial}</Info>
          <Info><Label>栏目介绍：</Label>{desc}</Info>
        </Card>
      </Wrapper>
    );
  }
}
Player.propTypes = {
  srcShort: React.PropTypes.string,
  src: React.PropTypes.string,
  id: React.PropTypes.number,
  ablum: React.PropTypes.string,
  isSub: React.PropTypes.bool,
  canPlay: React.PropTypes.bool,
  time: React.PropTypes.number,
  onPrev: React.PropTypes.func,
  onNext: React.PropTypes.func,
  title: React.PropTypes.string,
  date: React.PropTypes.number,
  serial: React.PropTypes.string,
  desc: React.PropTypes.string,
  people: React.PropTypes.string,
  coast: React.PropTypes.number,
  onSubscribe: React.PropTypes.func,
};

export default Player;
