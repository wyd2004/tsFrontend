import React from 'react';
import { Link, browserHistory } from 'react-router';
import { convDate, convAudioTime } from 'utils/tools';
import CardWrapS from 'components/Card/CardWrapS';
import { Title, Desc, Ablum, Actions, Special, Rank, Time, CreateDate, Coast, Searched } from './style';

export default class PodcastItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    id: React.PropTypes.number,
    title: React.PropTypes.string,
    desc: React.PropTypes.string,
    coast: React.PropTypes.number,
    createDate: React.PropTypes.string,
    time: React.PropTypes.number,
    rank: React.PropTypes.number,
    image: React.PropTypes.string,
    isBuy: React.PropTypes.bool,
    buying: React.PropTypes.bool,
    searchValue: React.PropTypes.string,
  };
  goBuy = (id) =>
     (e) => {
       e.stopPropagation();
       e.preventDefault();
       browserHistory.push(`/buy/episode/${id}`);
     }

  render() {
    const { id, title, desc, coast, createDate, time, rank, image, isBuy, searchValue, buying } = this.props;
    const renderSearchValue = (string = '') => {
      const index = string.search(searchValue);
      if (searchValue && index !== -1) {
        return <div>{string.substr(0, index)}<Searched>{searchValue}</Searched>{string.substr(index + searchValue.length)}</div>;
      }
      return string;
    };
    return (
      <Link to={`/play/${id}`}>
        <CardWrapS>
          <Ablum><img src={image || require('./assets/default.jpg')} alt="" /></Ablum>
          <Coast isBuy={isBuy} onClick={this.goBuy(id)}>{isBuy ? '已购买' : `RMB ${parseInt(coast, 10).toFixed(2)}`}</Coast>
          <Title>{renderSearchValue(title)}</Title>
          <Desc>{renderSearchValue(desc)}</Desc>
          {
            buying
            ? <Desc>购买后，该微信号对本节目有永久试听权</Desc>
            : <Actions>
              <Rank>NO.{rank}</Rank>
              <Time>{convAudioTime(time, '\'')}</Time>
              <CreateDate>{convDate(createDate)}</CreateDate>
              <Special>会员专享</Special>
            </Actions>
          }

        </CardWrapS>
      </Link>
    );
  }
}
