import styled from 'styled-components';
import CardWrap from 'components/Card/CardWrap';

const Button = styled.a`
  border-radius: 2px;
  background: white;
  margin: 3px;
  padding: 16px;
  text-align: center;
  height: 52px;
  width: calc(50% - 12px);
  display: block;
  float: left;
  background-position: 20px center;
  background-image: url(${(props) => props.icon ? require('./assets/' + props.icon + '.png') : ''});
  background-repeat: no-repeat;
  background-size: 18px 18px;
`;
export default Button;
