/* global COLOR_4 */
import React from 'react';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getSearchObj } from 'utils/tools';
import * as globalActions from './actions';
import { selectCurrentUser } from './selectors';

import styled from 'styled-components';


const Warpper = styled.div`
  padding: 6px;
  overflow: hidden;
`;
class App extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    const { location, user, fetchAccessToken, authError } = this.props;
    if (!user) {
      authError();
    }
    const code = getSearchObj(location.search).code;
    if (code) {
      fetchAccessToken(code);
    }
  }

  render() {
    return (
      <Warpper>
        {React.Children.toArray(this.props.children)}
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
};
const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser(),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...globalActions }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
