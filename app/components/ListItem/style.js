/* global COLOR_1 COLOR_2 COLOR_3 */

import styled from 'styled-components';
import { Wrapper } from 'components/Card';

const CardExt = styled(Wrapper)`
  padding: 12px;
  position: relative;
  overflow: hidden;
`;
const Title = styled.h1`
  font-size: 13px;
  text-align: left;
  color: ${COLOR_2};
  margin: 0;
  font-weight: normal;
`;
const Desc = styled.div`
  color: ${COLOR_3};
  font-size: 12px;
`;
const Ablum = styled.div`
  border-radius: 5px;
  width: 56px;
  height: 56px;
  float: left;
  margin-right: 10px;
`;
const Actions = styled.div`
  margin-top: 2px;
  color: ${COLOR_3};
  font-size: 12px;

`;
const ActionsItem = styled.span`
  padding-left: 10px;
  margin-left: 8px;
  color: ${COLOR_3};
  background-size: 13px 13px!important;
  padding-left: 14px;
  padding-top: 2px;
`;
const Special = styled.span`
  float: right;
`;

const Rank = styled(ActionsItem)`
  color: ${COLOR_1};
  background: url(${require('./assets/play_sm.png')}) no-repeat left;
  margin-left: 0;
`;
const Time = styled(ActionsItem)`
  background: url(${require('./assets/play_sm.png')}) no-repeat left;
`;
const CreateDate = styled(ActionsItem)`
  background: url(${require('./assets/time.png')}) no-repeat left;
`;
const Coast = styled.span`
  position: absolute;
  top: 12px;
  right: 12px;
  background: ${COLOR_1};
  padding: 5px;
  border-radius: 2px;
  color: white;
`;

export {
  CardExt,
  Title,
  Desc,
  Ablum,
  Actions,
  Special,
  Rank,
  Time,
  CreateDate,
  Coast,
}
