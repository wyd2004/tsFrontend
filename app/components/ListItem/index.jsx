import React from 'react';
import { convDate, convAudioTime } from 'utils/tools';
import CardWrapS from 'components/Card/CardWrapS';
import { Title, Desc, Ablum, Actions, Special, Rank, Time, CreateDate, Coast } from './style';

export default class ListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    id: React.PropTypes.string,
    title: React.PropTypes.string,
    desc: React.PropTypes.string,
    coast: React.PropTypes.number,
    createDate: React.PropTypes.number,
    time: React.PropTypes.number,
    rank: React.PropTypes.number,
    ablumPicture: React.PropTypes.string,
    isBuy: React.PropTypes.bool,
  };

  render() {
    const { title, desc, coast, createDate, time, rank, ablumPicture, isBuy } = this.props;
    return (
      <CardWrapS>
        <Ablum><img src={ablumPicture || require('./assets/default.jpg')} alt="" /></Ablum>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
        <Actions>
          <Rank>NO.{rank}</Rank>
          <Time>{convAudioTime(time, '\'')}</Time>
          <CreateDate>{convDate(createDate)}</CreateDate>
          <Special>会员专享</Special>
        </Actions>
        <Coast isBuy={isBuy} >{isBuy ? '已购买' : `RMB${parseInt(coast, 10).toFixed(2)}`}</Coast>
      </CardWrapS>
    );
  }
}
