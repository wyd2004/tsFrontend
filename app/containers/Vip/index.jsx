import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import { loadVip } from './actions';
import { selectVip } from './selectors';
import Infinite from 'components/Infinite';

import AlbumItem from 'components/AlbumItem';
import Title from 'components/Title';

const Wrapper = styled.div`
`;
export class Vip extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.loadVip();
  }
  handleRefresh = () => {
    const { albums } = this.props;
    const { page } = albums;
    page && this.props.loadVip(page);
  }
  render() {
    const { albums } = this.props;
    const { results: data } = albums;
    return (
      <Wrapper>
        <Helmet
          title="已会员栏目"
          meta={[
            { name: 'description', content: '糖蒜广播-已会员栏目' },
          ]}
        />
        <Title icon="podcast">会员栏目</Title>
        <Infinite onRefresh={this.handleRefresh}>
          {data.map((item) => <AlbumItem key={item.id} {...item} />)}
        </Infinite>
      </Wrapper>
    );
  }
}
Vip.propTypes = {
  albums: PropTypes.object,
  loadVip: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadVip }, dispatch);
}
const mapStateToProps = createStructuredSelector({
  albums: selectVip(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Vip);
