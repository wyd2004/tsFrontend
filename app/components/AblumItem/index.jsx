import React from 'react';
import { Link } from 'react-router';
import { convDate } from 'utils/tools';
import CardWrapS from 'components/Card/CardWrapS';
import { Title, Desc, Ablum, Actions, Rank, CreateDate } from '../podcastItem/style';

export default class AblumItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    id: React.PropTypes.number,
    title: React.PropTypes.string,
    desc: React.PropTypes.string,
    count: React.PropTypes.number,
    update: React.PropTypes.string,
    image: React.PropTypes.string,
  };

  render() {
    const { id, title, desc, count, update, image } = this.props;
    return (
      <Link to={`/special/${id}`}>
        <CardWrapS>
          <Ablum><img src={image || require('./assets/default.jpg')} alt="" /></Ablum>
          <Title>{title}</Title>
          <Desc>{desc}</Desc>
          <Actions>
            <Rank>{count}期</Rank>
            <CreateDate>{convDate(update)}</CreateDate>
          </Actions>
        </CardWrapS>
      </Link>
    );
  }
}
