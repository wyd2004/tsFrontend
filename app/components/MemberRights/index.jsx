/* global COLOR_3 */

import React from 'react';
import styled from 'styled-components';
import Card from 'components/Card';

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  overflow: hidden;
  margin-bottom: -20px;
`;
const ListItem = styled.li`
  float: left;
  width: 33.33333%;
  text-align: center;

  & img {
    ${''/* width: 28px;*/}
    border: 1px dotted rgb(210, 210, 210);
    padding: 6px;
    height: 42px;
    width: 42px;
    margin: auto;
    display: block;
    margin-bottom: 8px;
  }

  & span {
    margin-bottom: 20px;
    display: inline-block;
  }
`;
export default class MemberRights extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <Card>
        <List>
          {/* <ListItem><img src={require('./assets/1.png')} alt="" /><span>私密内容</span></ListItem> */}
          <ListItem><img src={require('./assets/2.png')} alt="" /><span>专享节目</span></ListItem>
          <ListItem><img src={require('./assets/3.png')} alt="" /><span>订阅栏目</span></ListItem>
        </List>
      </Card>
    );
  }
}
