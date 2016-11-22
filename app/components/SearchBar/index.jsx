/* global COLOR_1 COLOR_3 */

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 7px;
  border-radius: 2px;
  background: white;
`;
const InputContainer = styled.div`
  padding-left: 17px;
  background: url(${require('./assets/search.png')}) no-repeat;
  background-size: 14px 14px;
  background-position: left center;
  margin-left: ${(props) => props.shrink ? '0' : '70px'};
  transition: margin 0.5s ease-in-out;
  position: relative;

  & input {
    color: ${COLOR_3}
    border: none;
    width: 100%;

  }
`;
const Submit = styled.span`
  position: absolute;
  color: ${COLOR_1};
  display: ${(props) => props.shrink ? 'block' : 'none'};
  right: 0;
  top: 0;
  z-index: 10000;
`;
export default class SearchBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    onSearch: React.PropTypes.func,
  }
  constructor(props) {
    super(props);
    this.state = {
      isTyping: false,
      value: '',
    };
  }
  handleChange = (e) => {
    this.setState({ ...this.state, value: e.target.value });
  }
  handleBlur = () => {
    this.setState({ ...this.state, isTyping: false });
  }
  handleFocus = () => {
    this.setState({ ...this.state, isTyping: true });
  }
  handleClick = () => {
    this.props.onSearch(this.state.value);
  }
  render() {
    const { isTyping, value } = this.state;
    const shrink = isTyping || value !== '';
    return (
      <Wrapper>
        <InputContainer shrink={shrink}>
          <input value={value} onBlur={this.handleBlur} onFocus={this.handleFocus} onChange={this.handleChange} placeholder="请输入节目或主播关键词" type="text" />
          <Submit shrink={shrink} onClick={this.handleClick}>搜索</Submit>
        </InputContainer>
      </Wrapper>
    );
  }
}
