import React from 'react';
import CardWrap from 'components/Card/CardWrapS';
import { Title, Desc, Ablum, Coast } from 'components/ListItem/style';

export default class PodcastProfile extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    id: React.PropTypes.string,
    title: React.PropTypes.string,
    desc: React.PropTypes.string,
    coast: React.PropTypes.number,
    image: React.PropTypes.string,
  };

  render() {
    const { title, desc, coast, image } = this.props;
    return (
      <CardWrap>
        <Ablum><img src={image} alt="" /></Ablum>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
        <Desc>购买后，在xx年xx月xx日前，可随意收听本节目</Desc>
        <Coast>RMB {parseInt(coast, 10).toFixed(2)}</Coast>
      </CardWrap>
    );
  }
}
