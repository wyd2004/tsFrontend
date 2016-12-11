/* global COLOR_1 */
import React from 'react';
import styled from 'styled-components';
import LoadingComp from 'react-loading-animation';
import { DIALOG_TYPE } from 'containers/App/actions';

const Overlayer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;
const ComWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
`;
const AlertBox = styled.div`
  background: #ccc;
  padding: 20px 30px;
  border-radius: 15px;
  color: #333;

  &:before {
    content: '❗️';
    font-size: 55px;
    color: ${COLOR_1};
    display: block;
    text-align: center;
  }
`;
const ErrorBox = styled.div`
  background: #ccc;
  padding: 20px 30px;
  border-radius: 15px;
  color: #333;

  &:before {
    content: '❌';
    font-size: 55px;
    color: ${COLOR_1};
    display: block;
    text-align: center;
  }
`;

const Alert = (message) => <AlertBox>{message}</AlertBox>;
const Error = (message) => <ErrorBox>{message}</ErrorBox>;
const Loading = () => <LoadingComp></LoadingComp>;

const comps = {
  Loading,
  [DIALOG_TYPE.success]: Alert,
  [DIALOG_TYPE.info]: Alert,
  [DIALOG_TYPE.error]: Error,
};
export default class DialogBox extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    message: React.PropTypes.string,
    type: React.PropTypes.oneOf([...DIALOG_TYPE, 'Loading']),
  };
  render() {
    const { message, type } = this.props;
    const comp = comps[type];
    return (
      <Overlayer>
        <ComWrapper>
          {comp(message)}
        </ComWrapper>
      </Overlayer>
    );
  }
}
