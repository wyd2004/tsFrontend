import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import { loadSubscription } from 'containers/Profile/actions';
import { selectSubscription } from 'containers/Profile/selectors';

import PodcastItem from 'components/PodcastItem';
import Title from 'components/Title';

const Wrapper = styled.div`
`;
export class Subscription extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.loadSubscription();
  }
  render() {
    const { podcasts } = this.props;
    const { results: data } = podcasts;
    console.log(podcasts);
    return (
      <Wrapper>
        <Helmet
          title="已订阅栏目"
          meta={[
            { name: 'description', content: '糖蒜广播-已订阅栏目' },
          ]}
        />
        <Title icon="podcast">订阅栏目</Title>
        {data.map((item) => <PodcastItem {...item} />)}
      </Wrapper>
    );
  }
}
Subscription.propTypes = {
  podcasts: PropTypes.object,
  loadSubscription: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadSubscription }, dispatch);
}
const mapStateToProps = createStructuredSelector({
  podcasts: selectSubscription(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Subscription);
