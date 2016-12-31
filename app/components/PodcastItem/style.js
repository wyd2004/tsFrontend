/* global COLOR_1 COLOR_2 COLOR_3 */

import styled from 'styled-components';
import rem from 'utils/pxtorem';

const Title = styled.h1`
  font-size: ${rem('13px')};
  text-align: left;
  color: ${COLOR_2};
  margin: 0;
  font-weight: normal;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
const Desc = styled.div`
  color: ${COLOR_3};
  font-size: ${rem('10px')};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
const Ablum = styled.div`
  border-radius: ${rem('5px')};
  width: ${rem('56px')};
  height: ${rem('56px')};
  float: left;
  margin-right: ${rem('10px')};

  & img {
    width: 100%;
  }
`;
const Actions = styled.div`
  margin-top: ${rem('5px')};
  color: ${COLOR_3};
  font-size: ${rem('12px')};
`;
const ActionsItem = styled.span`
  padding-left: ${rem('10px')};
  margin-left: ${rem('8px')};
  color: ${COLOR_3};
  background-size: ${rem('13px')} ${rem('13px')}!important;
  padding-left: ${rem('14px')};
  padding-top: ${rem('2px')};
  font-family: 'BebasNeue';
`;
const Special = styled.span`
  float: right;
`;

const Rank = styled(ActionsItem)`
  color: ${COLOR_1};
  background: url(${require('./assets/list.png')}) no-repeat left;
  margin-left: 0;
`;
const Time = styled(ActionsItem)`
  background: url(${require('./assets/play_sm.png')}) no-repeat left;
`;
const CreateDate = styled(ActionsItem)`
  background: url(${require('./assets/time.png')}) no-repeat left;
`;
const Button = styled.span`
  background: ${COLOR_1};
  padding: ${rem('4px')} ${rem('15px')};
  border-radius: ${rem('2px')};
  color: white;
`;
const Coast = styled(Button)`
  font-family: 'BebasNeue';
  float: right;
  margin-left: ${rem('10px')};
  background-color: ${(props) => props.isBuy ? COLOR_3 : COLOR_1};
`;
const Searched = styled.span`
  color: ${COLOR_1};
`;
export {
  Title,
  Desc,
  Ablum,
  Actions,
  Special,
  Rank,
  Time,
  CreateDate,
  Coast,
  Searched,
  Button,
};
