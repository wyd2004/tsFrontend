import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import { loadVip } from 'containers/Profile/actions';
import { selectVip } from 'containers/Profile/selectors';

import PodcastItem from 'components/PodcastItem';
import Title from 'components/Title';

const Wrapper = styled.div`
`;
export class Vip extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { podcasts } = this.props;
    const { results: data } = podcasts;
    console.log(podcasts);
    return (
      <Wrapper>
        <Helmet
          title="会员栏目"
          meta={[
            { name: 'description', content: '糖蒜广播-会员栏目' },
          ]}
        />
        <Title icon="podcast">会员栏目</Title>
        {data.map((item) => <PodcastItem {...item} />)}
      </Wrapper>
    );
  }
}
Vip.propTypes = {
  podcasts: PropTypes.object,
  loadVip: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadVip }, dispatch);
}
const mapStateToProps = createStructuredSelector({
  podcasts: selectVip(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Vip);
