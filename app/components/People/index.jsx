/* global COLOR_2 */
import React, { PureComponent, PropTypes } from 'react';
import styled from 'styled-components';
import rem from 'utils/pxtorem';
import { Link } from 'react-router';
const Wrapper = styled(Link)`
  display: inline-block;
  position: relative;
  width: 25%;
  margin-bottom: ${rem('6px')};
  text-align: center;
`;

const Img = styled.img`
  width: ${rem('64px')};
  height: ${rem('64px')};
  border-radius: ${rem('64px')};
  display: block;
  margin: auto;
`;

const Text = styled.span`
  margin-top: ${rem('6px')};
  font-size: ${rem('14px')};
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
