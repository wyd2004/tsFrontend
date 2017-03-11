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
    ${''/* display: none;*/}
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
const Prev = styled.a`
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
  background-position-x: ${(props) => !props.played ? 0 : '100%'};
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
  margin: ${rem('6px')} 0;
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
  font-family: 'BebasNeue';
`;
const PublicDate = styled(Coast)`
  background-image: url(${require('../PodcastItem/assets/time.png')});
`;
const Subscribe = styled(Button)`
  float: right;
  background-color: ${(props) => !props.subscribed ? '#ff7575' : COLOR_3};
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
  componentWillReceiveProps(nextProps) {
    if (nextProps.id !== this.props.id) {
      this.setState({
        currentTime: 0,
        loaded: false,
        played: false,
      });
    }
  }
  handleLoaded = () => {
    this.audio.play();
    this.setState({
      ...this.state,
      played: true,
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
  handleEnded = () => {
    const { src } = this.props;
    const canPlay = src;
    if (!canPlay) {
      alert('试听5分钟，完整收听请开通会员或购买节目'); // eslint-disable-line
    }
    this.setState({
      ...this.state,
      played: false,
    });
  }
  handleProgressUpdate = (newProgress) => {
    this.audio.currentTime = (newProgress / 100) * this.audio.duration;
  }
  handleSub = () => {
    const { id, subscribed } = this.props;
    const state = subscribed ? 0 : 1;
    this.props.onSubscribe(id, state);
  }
  render() {
    const { id, srcShort, src, image, time: totalTime, title, createDate, serial, desc, people, coast, subscribed, prev, next } = this.props;
    const { currentTime, loaded, played } = this.state;
    const finalSrc = src || srcShort;
    const canPlay = src;
    return (
      <Wrapper>
        {/* 此处的ref用法请参考：https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md */}
        {finalSrc && (
          <audio
            ref={(c) => { this.audio = c; }}
            preload="auto"
            src={finalSrc}
            onCanPlay={this.handleLoaded}
            onTimeUpdate={this.handleTimeUpdate}
            onEnded={this.handleEnded}
          >
            <source src={finalSrc} type="audio/mpeg" />
          </audio>
        )}
        <Card>
          <Ablum><img src={image || require('./assets/default.jpg')} alt="节目封面" /></Ablum>
          <ProgressBar
            currentTime={currentTime}
            totalTime={totalTime}
            ready={loaded}
            onProgressUpdate={this.handleProgressUpdate}
          />
          <Actions>
            <Prev href={prev !== undefined ? `/play/${prev}` : `/play/${id}`}></Prev>
            <PlayButton onClick={this.handlePlay} played={played}></PlayButton>
            <Next href={next !== undefined ? `/play/${next}` : `/play/${id}`}></Next>
          </Actions>
        </Card>
        {!canPlay && <Card2>试听5分钟，完整收听请<StyledLink to="/profile">开通会员</StyledLink>或<StyledLink to={`/buy/episode/${id}`}>购买本节目</StyledLink></Card2>}
        <Card>
          <Subscribe subscribed={subscribed} onClick={this.handleSub}>{subscribed ? '取消订阅' : '订阅'}</Subscribe>
          <Title>{title}</Title>
          <Info>
            <Coast>{coast}</Coast>
            <PublicDate>{convDate(createDate)}</PublicDate>
          </Info>
          <Info><Label>主持人：</Label>{people && people.map((item) => `${item.name} `)}</Info>
          <Info><Label>栏目：</Label>{serial}</Info>
          <Info><Label>节目介绍：</Label>{desc}</Info>
        </Card>
      </Wrapper>
    );
  }
}
Player.propTypes = {
  srcShort: React.PropTypes.string,
  src: React.PropTypes.string,
  id: React.PropTypes.number,
  albumId: React.PropTypes.number,
  image: React.PropTypes.string,
  subscribed: React.PropTypes.bool,
  time: React.PropTypes.number,
  prev: React.PropTypes.number,
  next: React.PropTypes.number,
  title: React.PropTypes.string,
  createDate: React.PropTypes.string,
  serial: React.PropTypes.string,
  desc: React.PropTypes.string,
  people: React.PropTypes.array,
  coast: React.PropTypes.number,
  onSubscribe: React.PropTypes.func,
};

export default Player;
