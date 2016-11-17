/* global COLOR_1 */
import React, { PureComponent, PropTypes } from 'react';
import styled from 'styled-components';
import CollectionItem from '../CollectionItem';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 13px;
  color: ${COLOR_1};
`;

const CollectionItemWrap = styled.span`
  display: inline-block;
  width: 25%;
  margin-bottom: 6px;
`;

const CollectionList = styled.div`

`;

export default class Collection extends PureComponent {
  static propTypes = {
    type: PropTypes.string,
    title: PropTypes.string,
    data: PropTypes.array,
  }

  render() {
    const { type, title, data } = this.props;
    const collection = data.map((v, i) => {
      const { src, alt, url, isNew, text } = v;
      return <CollectionItemWrap key={i}><CollectionItem type={type} src={src} url={url} alt={alt} isNew={isNew} text={text} /></CollectionItemWrap>;
    });
    const addPic = require('./assets/add.png');

    return (
      <Wrap>
        <Title>{title}</Title>
        <CollectionList>
          {collection}
          {(data.length >= 7 && type === 'album') ? (<CollectionItemWrap><CollectionItem type={type} src={addPic} url={'###'} alt={'查看全部'} text={'查看全部'} /></CollectionItemWrap>) : null}
        </CollectionList>
      </Wrap>
    );
  }
}
