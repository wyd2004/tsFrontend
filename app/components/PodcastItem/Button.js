/* global COLOR_1 COLOR_2 COLOR_3 */

import styled from 'styled-components';
import rem from 'utils/pxtorem';

const Button = styled.span`
  background: ${COLOR_1};
  padding: ${rem('4px')} ${rem('15px')};
  border-radius: ${rem('2px')};
  color: white;
`;
export default Button;
