/* global COLOR_3 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Motion, spring } from 'react-motion';

import { selectPodcast, selectAblum } from './selectors';
import { selectLastPodcast } from 'containers/App/selectors';

import UserButton from 'components/UserButton';
import PodcastItem from 'components/PodcastItem';
import AlbumItem from 'components/AlbumItem';
import Infinite from 'components/Infinite';

import * as indexActions from './actions';

import styled from 'styled-components';
import rem from 'utils/pxtorem';

/* eslint-disable */
const Button = styled.button`
  border-radius: ${rem('2px')};
  background: white;
  margin: ${rem('3px')};
  padding: ${rem('16px')};
  text-align: center;
  height: ${rem('52px')};
  width: calc(50% - ${rem('6px')});
  display: block;
  float: left;
  background-color: ${(props) => props.highlight ? 'rgba(210, 210, 210, 0.2)' : ''};
  background-position: ${rem('20px')} center;
  background-image: url(${(props) => props.icon ? require('./assets/' + props.icon + '.png') : ''});
  background-repeat: no-repeat;
  background-size: ${rem('18px')} ${rem('18px')};
`;
/* eslint-enable */

const Actions = styled.div`
  overflow: hidden;
`;
const PodcastButton = styled(Button)`
  height: ${rem('110px')};
  line-height: ${rem('80px')};
  background-size: ${rem('55px')};
  text-indent: ${rem('40px')};
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
    & > div {
      height: calc(100vh - ${rem('130px')});
      overflow: scroll;
    }
`;
const LastPodcast = styled(Link)`
  border-radius: 0.125rem;
  background: white;
  margin: 0.375rem 0;
  position: relative;
  overflow: hidden;
  padding: 0.75rem;
  display: block;
  font-weight: bold;
  color: #a2a2a2;
  font-size: ${rem('16px')};
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
    podcast.results.length === 0 && this.props.loadPodcast();
    ablum.results.length === 0 && this.props.loadAlbum();
  }
  handleRefresh = () => {
    const { podcast, ablum } = this.props;
    const { current } = this.state;
    if (current === 'album') {
      ablum.page !== null && this.props.loadAlbum(ablum.page);
    } else {
      podcast.page !== null && this.props.loadPodcast(podcast.page);
    }
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
    const { podcast, ablum, last } = this.props;
    const { current } = this.state;
    return (
      <div style={{ overflow: 'hidden' }}>
        <Helmet
          title="TS广播-微信"
          meta={[
            { name: 'description', content: 'TS广播-微信' },
          ]}
        />
        <Actions>
          <PodcastButton icon="podcast" onClick={this.handleChange('podcast')} highlight={current === 'podcast'}>节目</PodcastButton>
          <LinkWrapper to="/search">
            <Button icon="search">搜索</Button>
          </LinkWrapper>
          <Button icon="ablum" onClick={this.handleChange('album')} highlight={current === 'album'}>专辑</Button>
        </Actions>
        {last && (
          <LastPodcast to={`/play/${last.id}`}>
            继续收听：{last.title}
          </LastPodcast>
        )}
        <UserButton />
        <Motion defaultStyle={{ x: 0 }} style={{ x: spring(current === 'podcast' ? 0 : 50) }}>
          {({ x }) =>
            <ContentWrapper style={{ transform: `translate3d(-${x}%, 0, 0)` }}>
              <ListWrapper>
                <Infinite onRefresh={this.handleRefresh} scrollOnContainer >
                  {podcast.results.map((item) => <PodcastItem {...item} key={item.id} fromIndex />)}
                </Infinite>
              </ListWrapper>
              <ListWrapper>
                <Infinite onRefresh={this.handleRefresh} scrollOnContainer >
                  {ablum.results.map((item) => <AlbumItem {...item} key={item.id} />)}
                </Infinite>
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
  podcast: PropTypes.object,
  ablum: PropTypes.object,
  last: PropTypes.object,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(indexActions, dispatch);
}
const mapStateToProps = createStructuredSelector({
  podcast: selectPodcast(),
  ablum: selectAblum(),
  last: selectLastPodcast(),
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
