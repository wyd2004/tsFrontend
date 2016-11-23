/* global COLOR_1 */
import styled from 'styled-components';

/* eslint-disable */
const Title = styled.p`
  font-size: 13px;
  color: ${COLOR_1};
  margin: 3px;
  padding-left: 20px;
  background-image: url(${(props) => props.icon ? require('./assets/' + props.icon + '.png') : ''});
  background-position: left center;
  background-repeat: no-repeat;
  background-size: 15px 15px;
`;
/* eslint-enable */
export default Title;
