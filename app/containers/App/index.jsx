/* global COLOR_4 */
import React from 'react';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getSearchObj } from 'utils/tools';
import * as globalActions from './actions';
import { selectCurrentUser, selectLoading, selectDailog } from './selectors';

import styled from 'styled-components';
import DialogBox from 'components/DialogBox';

const Warpper = styled.div`
  padding: 6px;
  overflow: hidden;
`;
class App extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    const { location, user, fetchAccessToken, authError } = this.props;
    const code = getSearchObj(location.search).code;
    if (code) {
      fetchAccessToken(code);
    } else if (!user) {
      authError();
    }
  }

  render() {
    const { user, load, dialog } = this.props;
    return (
      <Warpper>
        {user && React.Children.toArray(this.props.children)}
        {load && <DialogBox type="Loading" />}
        {dialog && <DialogBox type={dialog.type} message={dialog.message} />}
      </Warpper>
    );
  }
}
App.propTypes = {
  children: React.PropTypes.node,
  location: React.PropTypes.object,
  user: React.PropTypes.object,
  fetchAccessToken: React.PropTypes.func,
  authError: React.PropTypes.func,
  load: React.PropTypes.string,
  dialog: React.PropTypes.object,
};
const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser(),
  load: selectLoading(),
  dialog: selectDailog(),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...globalActions }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
