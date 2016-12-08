import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from 'containers/App/selectors';
import { selectPodcast } from './selectors';
import { loadSubscription } from './actions';

import List from 'components/List';
import Title from 'components/Title';

const Wrapper = styled.div`
`;
export class Subscription extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    const { user } = this.props;
    this.props.loadSubscription(user.member_id);
  }
  render() {
    const { podcasts } = this.props;
    return (
      <Wrapper>
        <Helmet
          title="已订阅栏目"
          meta={[
            { name: 'description', content: '糖蒜广播-已订阅栏目' },
          ]}
        />
        <Title icon="podcast">订阅栏目</Title>
        {/* <List data={podcasts} /> */}
      </Wrapper>
    );
  }
}
Subscription.propTypes = {
  user: PropTypes.object,
  podcasts: PropTypes.array,
  loadSubscription: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadSubscription }, dispatch);
}
const mapStateToProps = createStructuredSelector({
  podcasts: selectPodcast(),
  user: selectCurrentUser(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Subscription);
