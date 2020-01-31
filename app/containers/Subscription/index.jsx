import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import { loadAlbum } from './actions';
import { selectSubscription } from './selectors';
import Infinite from 'components/Infinite';

import AlbumItem from 'components/AlbumItem';
import Title from 'components/Title';

const Wrapper = styled.div`
`;
export class Subscription extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.loadAlbum();
  }
  handleRefresh = () => {
    const { albums } = this.props;
    const { page } = albums;
    page && this.props.loadAlbum(page);
  }
  render() {
    const { albums } = this.props;
    const { results: data } = albums;
    return (
      <Wrapper>
        <Helmet
          title="已订阅栏目"
          meta={[
            { name: 'description', content: 'TS广播-已订阅栏目' },
          ]}
        />
        <Title icon="podcast">订阅栏目</Title>
        <Infinite onRefresh={this.handleRefresh}>
          {data.map((item) => <AlbumItem key={item.id} {...item} />)}
        </Infinite>
      </Wrapper>
    );
  }
}
Subscription.propTypes = {
  albums: PropTypes.object,
  loadAlbum: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadAlbum }, dispatch);
}
const mapStateToProps = createStructuredSelector({
  albums: selectSubscription(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Subscription);
