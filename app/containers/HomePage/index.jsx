import React, { Component } from 'react';
import styled from 'styled-components';
import ListItem from 'components/ListItem';

const Wrapper = styled.div`
  background: ${COLOR_3};
`;
export default class App extends Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <Wrapper>
        <h1>组件集合：</h1>
        <ListItem title="中年人减肥之道" desc="B哥夜话" coast={6} createDate={Date.now()} time={78} rank={12} />
        <ListItem title="中年人减肥之道" desc="B哥夜话" coast={6} createDate={Date.now()} time={78} rank={12} />
        <ListItem title="中年人减肥之道" desc="B哥夜话" coast={6} createDate={Date.now()} time={78} rank={12} />
        <ListItem title="中年人减肥之道" desc="B哥夜话" coast={6} createDate={Date.now()} time={78} rank={12} />
        <ListItem title="中年人减肥之道" desc="B哥夜话" coast={6} createDate={Date.now()} time={78} rank={12} />
        <ListItem title="中年人减肥之道" desc="B哥夜话" coast={6} createDate={Date.now()} time={78} rank={12} />
        <ListItem title="中年人减肥之道" desc="B哥夜话" coast={6} createDate={Date.now()} time={78} rank={12} />
        <ListItem title="中年人减肥之道" desc="B哥夜话" coast={6} createDate={Date.now()} time={78} rank={12} />
        <ListItem title="中年人减肥之道" desc="B哥夜话" coast={6} createDate={Date.now()} time={78} rank={12} />
        <ListItem title="中年人减肥之道" desc="B哥夜话" coast={6} createDate={Date.now()} time={78} rank={12} />
        <ListItem title="中年人减肥之道" desc="B哥夜话" coast={6} createDate={Date.now()} time={78} rank={12} />
        <ListItem title="中年人减肥之道" desc="B哥夜话" coast={6} createDate={Date.now()} time={78} rank={12} />
        <ListItem title="中年人减肥之道" desc="B哥夜话" coast={6} createDate={Date.now()} time={78} rank={12} />
      </Wrapper>
    );
  }
}
