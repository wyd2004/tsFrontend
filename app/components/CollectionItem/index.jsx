/* global COLOR_2 */
import React, { PureComponent, PropTypes } from 'react';
import styled from 'styled-components';
import Album from '../Album';
import Avatar from '../Avatar';

const Wrap = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const Text = styled.span`
  margin-top: 6px;
  font-size: 14px;
  color: ${COLOR_2};
`;

export default class CollectionItem extends PureComponent {
  static defaultProps = {

  };

  static propTypes = {
    src: PropTypes.string,
    isNew: PropTypes.bool,
    alt: PropTypes.string,
    url: PropTypes.string,
    type: PropTypes.string,
    text: PropTypes.string,
  };

  render() {
    const { src, alt, url, isNew, type, text } = this.props;
    const card = type === 'avatar' ? (<Avatar src={src} alt={alt} url={url} />) : (<Album src={src} alt={alt} url={url} isNew={isNew} />);

    return (
      <Wrap>
        {card}
        <Text>{text}</Text>
      </Wrap>
    );
  }
}
