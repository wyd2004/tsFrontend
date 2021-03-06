/* global COLOR_1 COLOR_2 COLOR_3 */
import React from 'react';
import styled from 'styled-components';
import rem from 'utils/pxtorem';
import { convAudioTime } from 'utils/tools';


// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background

const Wrapper = styled.div`
  margin: ${rem('12px')};
  text-align: center;
`;
const Bar = styled.span`
  height: ${rem('3px')};
  background: ${COLOR_3};
  width: calc(100% - ${rem('120px')});
  position: relative;
  display:inline-block;
  top: -${rem('3px')};
  border-radius: ${rem('3px')};

  &:before {
    content: '';
    color: ${COLOR_1};
    display: block;
    width: ${(props) => props.progress}%;
    height: ${rem('3px')};
    background-color: ${COLOR_1};
    border-radius: ${rem('3px')};
  }
`;

const Time = styled.span`
  color: ${(props) => props.isPressed ? COLOR_1 : COLOR_3};
  width: ${rem('60px')};
  display: inline-block;
`;

const Control = styled.div`
  width: ${rem('40px')};
  height: ${rem('40px')};
  position: absolute;
  top: -${rem('20px')};
  left: ${(props) => props.progress}%;
  line-height: ${rem('37px')};
  margin-left: -${rem('15px')};
  transform: scale(${(props) => props.isPressed ? 2 : 1});

  &:after {
    content: '';
    display: inline-block;
    width: ${rem('7px')};
    height: ${rem('7px')};
    color: ${COLOR_1};
    border-radius: ${rem('7px')};
    transform: translateX(-50%);
    background-color: ${COLOR_1};
  }
`;
export default class ProgressBar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    currentTime: React.PropTypes.number,
    totalTime: React.PropTypes.number,
    ready: React.PropTypes.bool,
    onProgressUpdate: React.PropTypes.func,
  }
  constructor(props) {
    super(props);
    const { currentTime, totalTime } = props;
    const progress = (currentTime * 100) / totalTime || 0;
    this.state = {
      startTouch: 0,
      isPressed: false,
      progress,
    };
  }
  componentDidMount() {
    window.addEventListener('touchmove', this.handleTouchMove);
    window.addEventListener('touchend', this.handleTouchEnd);
  }
  componentWillUnmount() {
    window.removeEventListener('touchmove', this.handleTouchMove);
    window.removeEventListener('touchend', this.handleTouchEnd);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.totalTime !== this.props.totalTime) {
      const { currentTime, totalTime } = this.props;
      const progress = (currentTime * 100) / totalTime || 0;
      this.setState({
        startTouch: 0,
        isPressed: false,
        progress,
      });
    }
  }
  handleTouchStart = (e) => {
    const { pageX } = e.touches[0];
    const { progress } = this.state;
    this.setState({
      ...this.state,
      startTouch: pageX,
      startProgress: progress,
      isPressed: true,
    });
  }
  handleTouchMove = (e) => {
    const { isPressed, startTouch, startProgress } = this.state;
    const controlDOM = e.target;
    if (isPressed) {
      requestAnimationFrame(() => {
        const { pageX: currentTouch } = e.touches[0];
        const { width } = controlDOM.parentElement.getBoundingClientRect();
        const newProgress = ((((currentTouch - startTouch) * 100) / width) + startProgress);

        if (newProgress >= 0 && newProgress <= 100) {
          this.setState({
            ...this.state,
            progress: newProgress,
          });
        }
      });
    }
  }
  handleTouchEnd = () => {
    const { onProgressUpdate } = this.props;
    const { isPressed, progress } = this.state;

    if (isPressed) {
      this.setState({
        ...this.state,
        startTouch: 0,
        isPressed: false,
      });
      onProgressUpdate(progress);
    }
  }
  render() {
    const { currentTime, totalTime, ready } = this.props;
    const { progress, isPressed } = this.state;

    return (
      <Wrapper>
        <Time isPressed={isPressed}>{ready ? convAudioTime(isPressed ? ((totalTime * progress) / 100) : currentTime) : '--:--'}</Time>
        <Bar progress={progress}>
          <Control progress={progress} onTouchStart={this.handleTouchStart} isPressed={isPressed} />
        </Bar>
        <Time>{ready ? convAudioTime(totalTime) : '--:--'}</Time>
      </Wrapper>
    );
  }
}
