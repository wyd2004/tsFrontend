/* global COLOR_1 COLOR_3 */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import { convAudioTime } from 'utils/tools';

const Wrapper = styled.div`

`;
const Card = styled.div`
  padding: 20px;
  border-radius: 2px;
  text-align: center;
  background: white;
  margin: 6px;
`;
const Ablum = styled.div`
  width: 100%;
  height: auto;
  background: ${COLOR_3};
  & img {
    width: 100%;
  }
`;
const Progress = styled.div`
  margin: 12px;

  & audio {
    display: none;
  }
`;
const Time = styled.span`
  color: ${COLOR_3};
  width: 40px;
  display: inline-block;
`;
const ProgressBar = styled.span`
  height: 3px;
  background: ${COLOR_3};
  width: calc(100% - 80px);
  position: relative;
  display:inline-block;
  top: -3px;
  border-radius: 3px;

  &:before {
    content: '';
    color: ${COLOR_1};
    display: block;
    width: ${(props) => props.progress}%;
    height: 3px;
    background-color: ${COLOR_1};
    border-radius: 3px;
  }
  &:after {
    content: '';
    width: 7px;
    height: 7px;
    color: ${COLOR_1};
    position: absolute;
    top: -2px;
    left: ${(props) => props.progress}%;
    border-radius: 7px;
    transform: translateX(-50%);
    background-color: ${COLOR_1};
  }
`;
const Actions = styled.div`

`;
const Prev = styled.span`
  background-image: url(${require('./assets/prev.png')});
  background-size: 25px 25px;
  height: 25px;
  width: 25px;
  display: inline-block;
  position: relative;
top: -17px;
`;
const Next = styled(Prev)`
  background: url(${require('./assets/next.png')});
  background-size: 25px 25px;
`;
const PlayButton = styled.span`
  background-image: url(${require('./assets/play.png')});
  background-size: 60px 60px;
  background-position-x: ${(props) => !props.played ? 0 : 25}px;
  height: 60px;
  width: 60px;
  display: inline-block;
  margin: 0 40px;
`;
const StyledLink = styled(Link)`
  color: ${COLOR_1};
`;
const Card2 = styled(Card)`
  font-size: 13px;
  padding-top: 5px;
  padding-bottom: 5px;
`;
export default class Player extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    srcShort: React.PropTypes.string,
    src: React.PropTypes.string,
    ablum: React.PropTypes.string,
    canPlay: React.PropTypes.bool,
    time: React.PropTypes.number,
  }
  constructor(props) {
    super(props);
    this.state = {
      currentTime: undefined,
      totleTime: undefined,
      loaded: false,
      played: false,
    };
  }
  handleLoaded = () => {
    this.setState({
      ...this.state,
      loaded: true,
    });
    console.log('音频已加载完毕');
  };
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
  };
  render() {
    const { srcShort, src, ablum, canPlay, time } = this.props;
    const { currentTime, totleTime, played } = this.state;
    return (
      <Wrapper>
        <Card>
          <Ablum><img src={ablum || require('./assets/default.jpg')} alt="节目封面" /></Ablum>
          <Progress>
            {/* 此处的ref请参考：https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md */}
            <audio ref={(c) => { this.audio = c; }} src={canPlay ? src : srcShort} preload onCanPlay={this.handleLoaded} />
            <Time>{currentTime ? convAudioTime(currentTime) : '--:--'}</Time>
            <ProgressBar progress={currentTime / totleTime || 10}></ProgressBar>
            <Time>{currentTime ? convAudioTime(totleTime) : '--:--'}</Time>
          </Progress>
          <Actions>
            <Prev></Prev>
            <PlayButton onClick={this.handlePlay} played={played}></PlayButton>
            <Next></Next>
          </Actions>
        </Card>
        <Card2>试听5分钟，完整收听请<StyledLink>开通会员</StyledLink>或<StyledLink>购买本节目</StyledLink></Card2>
      </Wrapper>
    );
  }
}
