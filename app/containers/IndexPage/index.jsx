/* global COLOR_3 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Motion, spring } from 'react-motion';

import { selectPodcast, selectAblum } from './selectors';

import Loading from 'react-loading-animation';
import UserButton from 'components/UserButton';
import PodcastItem from 'components/PodcastItem';

import * as indexActions from './actions';

import styled from 'styled-components';

import Button from './button';

const Actions = styled.div`
  overflow: hidden;
`;
const PodcastButton = styled(Button)`
  height: 110px;
  line-height: 80px;
  background-size: 55px;
  text-indent: 40px;
`;
const LinkWrapper = styled(Link)`
  color: ${COLOR_3};
`;
const ContentWrapper = styled.div`
  width: 200%;
`;
const ListWrapper = styled.div`
  width: 50%;
  float: left;
`;
export class IndexPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      current: 'podcast',
    };
  }
  componentWillMount() {
    const { podcast, ablum } = this.props;
    podcast && this.props.loadPodcast();
    ablum && this.props.loadAlbum();
  }
  handleChange = (state) =>
     (e) => {
       e.preventDefault();
       this.setState({
         ...this.state,
         current: state,
       });
     }

  render() {
    const { podcast, ablum } = this.props;
    const { current } = this.state;
    return (
      <div style={{ overflow: 'hidden' }}>
        <Helmet
          title="糖蒜广播-微信"
          meta={[
            { name: 'description', content: '糖蒜广播-微信' },
          ]}
        />
        <Actions>
          <PodcastButton icon="podcast" onClick={this.handleChange('podcast')} highlight={current === 'podcast'}>节目</PodcastButton>
          <LinkWrapper to="/search">
            <Button icon="search">搜索</Button>
          </LinkWrapper>
          <Button icon="ablum" onClick={this.handleChange('album')} highlight={current === 'album'}>专辑</Button>
        </Actions>
        <UserButton />
        <Motion defaultStyle={{ x: 0 }} style={{ x: spring(current === 'podcast' ? 0 : 50) }}>
          {({ x }) =>
            <ContentWrapper style={{ transform: `translate3d(-${x}%, 0, 0)` }}>
              <ListWrapper>
                {podcast.map((item) => <PodcastItem {...item} />)}
              </ListWrapper>
              <ListWrapper>
                {podcast.map((item) => <PodcastItem {...item} />)}
              </ListWrapper>
            </ContentWrapper>
            }
        </Motion>
      </div>
    );
  }
}

IndexPage.propTypes = {
  loadAlbum: PropTypes.func,
  loadPodcast: PropTypes.func,
  podcast: PropTypes.array,
  ablum: PropTypes.array,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(indexActions, dispatch);
}
const mapStateToProps = createStructuredSelector({
  podcast: selectPodcast(),
  ablum: selectAblum(),
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
