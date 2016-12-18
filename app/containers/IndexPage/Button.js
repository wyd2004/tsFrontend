import styled from 'styled-components';
import rem from 'utils/pxtorem';

// 这里关掉eslint是因为在background-image这行不能用eslint-disabled-line
/* eslint-disable */
const Button = styled.button`
  border-radius: ${rem('2px')};
  background: white;
  margin: ${rem('3px')};
  padding: ${rem('16px')};
  text-align: center;
  height: ${rem('52px')};
  width: calc(50% - ${rem('12px')});
  display: block;
  float: left;
  background-color: ${(props) => props.highlight ? 'rgba(210, 210, 210, 0.2)' : ''};
  background-position: ${rem('20px')} center;
  background-image: url(${(props) => props.icon ? require('./assets/' + props.icon + '.png') : ''});
  background-repeat: no-repeat;
  background-size: ${rem('18px')} ${rem('18px')};
`;
export default Button;
