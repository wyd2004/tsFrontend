/* global COLOR_1 */
import styled from 'styled-components';
import rem from 'utils/pxtorem';

/* eslint-disable */
const Title = styled.p`
  font-size: ${rem('13px')};
  color: ${COLOR_1};
  margin: ${rem('3px')};
  padding-left: ${rem('20px')};
  background-image: url(${(props) => props.icon ? require('./assets/' + props.icon + '.png') : ''});
  background-position: left center;
  background-repeat: no-repeat;
  background-size: ${rem('15px')} ${rem('15px')};
`;
/* eslint-enable */
export default Title;
