import React from 'react';
import moment from 'moment';

import styled from 'styled-components';


// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
const Wrapper = styled.div`
  padding: 12px;
  background: white;
  border-radius: 2px;
  margin: 6px;
  position: relative;
`;

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const Title = styled.h1`
  font-size: 13px;
  text-align: left;
  color: ${COLOR_2};
  margin: 0;
  font-wight: normal;
`;
const Desc = styled.div`
  color: ${COLOR_3};
  font-size: 12px;
`;
const Ablum = styled.div`
  border-radius: 5px;
  width: 56px;
  height: 56px;
  float: left;
  margin-right: 10px;
`;
const Actions = styled.div`
  margin-top: 2px;
  color: ${COLOR_3};
  font-size: 12px;

`;
const ActionsItem = styled.span`
  padding-left: 10px;
  margin-left: 8px;
  color: ${COLOR_3};
  background-size: auto 100%!important;
  padding-left: 14px;
  padding-top: 2px;
`;
const Special = styled.span`
  float: right;
`;

const Rank = styled(ActionsItem)`
  color: ${COLOR_1};
  background: url(${require('./assets/play_sm.png')}) no-repeat left;
  margin-left: 0;
`;
const Time = styled(ActionsItem)`
  background: url(${require('./assets/play_sm.png')}) no-repeat left;
`;
const CreateDate = styled(ActionsItem)`
  background: url(${require('./assets/time.png')}) no-repeat left;
`;
const Coast = styled.span`
  position: absolute;
  top: 12px;
  right: 12px;
  background: ${COLOR_1};
  padding: 5px;
  border-radius: 2px;
  color: white;
`;

export default class ListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    title: React.PropTypes.string,
    desc: React.PropTypes.string,
    coast: React.PropTypes.number,
    createDate: React.PropTypes.number,
    time: React.PropTypes.number,
    rank: React.PropTypes.number,
    ablumPicture: React.PropTypes.string,
  };

  render() {
    const { title, desc, coast, createDate, time, rank, ablumPicture } = this.props;
    const convDate = (date) => moment(date).format('MM/DD/YYYY');
    return (
      <Wrapper>
        <Ablum><img src={ablumPicture || require('./assets/default.jpg')} alt="" /></Ablum>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
        <Actions>
          <Rank>NO.{rank}</Rank>
          <Time>{`${parseInt(time / 60, 10)}'${time % 60}''` }</Time>
          <CreateDate>{convDate(createDate)}</CreateDate>
          <Special>会员专享</Special>
        </Actions>
        <Coast>RMB {parseInt(coast, 10).toFixed(2)}</Coast>
      </Wrapper>
    );
  }
}
