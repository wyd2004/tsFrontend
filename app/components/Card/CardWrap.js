import styled from 'styled-components';
import rem from 'utils/pxtorem';

const CardWrap = styled.div`
  padding: ${rem('20px')};
  border-radius: ${rem('2px')};
  background: white;
  margin: ${rem('6px')} 0;
  position: relative;
  overflow: hidden;
`;
export default CardWrap;
