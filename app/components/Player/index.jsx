/* global COLOR_1 COLOR_3 */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import ProgressBar from 'components/ProgressBar';

const Wrapper = styled.div`
  & audio {
    display: none;
  }
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
    isMenmber: React.PropTypes.bool,
    time: React.PropTypes.number,
    onPrev: React.PropTypes.func,
    onNext: React.PropTypes.func,
  }
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
  render() {
    const { srcShort, src, ablum, isMenmber, time: totalTime } = this.props;
    const { currentTime, loaded, played } = this.state;

    return (
      <Wrapper>
        {/* 此处的ref用法请参考：https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md */}
        <audio
          ref={(c) => { this.audio = c; }}
          src={isMenmber ? src : srcShort} preload
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
        <Card2>试听5分钟，完整收听请<StyledLink>开通会员</StyledLink>或<StyledLink>购买本节目</StyledLink></Card2>
      </Wrapper>
    );
  }
}
