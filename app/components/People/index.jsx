/* global COLOR_2 */
import React, { PureComponent, PropTypes } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
const Wrapper = styled(Link)`
  display: inline-block;
  position: relative;
  width: 25%;
  margin-bottom: 6px;
  text-align: center;
`;

const Img = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 64px;
  display: block;
  margin: auto;
`;

const Text = styled.span`
  margin-top: 6px;
  font-size: 14px;
  color: ${COLOR_2};
`;
export default class Album extends PureComponent {
  static defaultProps = {
    image: require('./assets/defaults.png'),
  };

  static propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.number,
  };

  render() {
    const { image, title, id } = this.props;

    return (
      <Wrapper to={`/people/${id}`}>
        <Img src={image} alt={title} />
        <Text>{title}</Text>
      </Wrapper>
    );
  }
}
