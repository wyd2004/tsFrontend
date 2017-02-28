/* global COLOR_1 COLOR_3 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Player from 'components/Player';
import { selectPodcast, selectHistory } from './selectors';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';

import * as playActions from './actions';

import PodcastItem from 'components/PodcastItem';
import Title from 'components/Title';
import Infinite from 'components/Infinite';

export class Play extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    const { id } = this.props.params;
    this.fetchDate(id);
  }
  componentWillReceiveProps(nextProps) {
    const next = nextProps.params.id;
    const current = this.props.params.id;
    if (next !== current) {
      this.fetchDate(next);
    }
  }
  fetchDate = (id) => {
    const { from } = this.props.params;
    this.props.loadPodcast(id);
    if (from !== 'index') {
      this.props.loadHistory(id);
    } else {
      this.props.loadIndex();
    }
  }
  handleRefresh = () => {
    const { history, params } = this.props;
    history.page !== null && this.props.loadHistory(params.id, history.page);
  }
  render() {
    const { podcast, history, subscribe } = this.props;
    return (
      <div>
        <Helmet
          title="播放页"
          meta={[
            { name: 'description', content: '糖蒜广播-播放页' },
          ]}
        />
        <Player {...podcast} onSubscribe={subscribe} />
        {history.results.length !== 0 && (
          <div>
            <Title icon="before">往期广播</Title>
            <Infinite onRefresh={this.handleRefresh}>
              {history.results.map((item) => <PodcastItem key={item.id} {...item} />)}
            </Infinite>
          </div>
        )}
      </div>
    );
  }
}
Play.propTypes = {
  loadPodcast: PropTypes.func,
  loadHistory: PropTypes.func,
  loadIndex: PropTypes.func,
  subscribe: PropTypes.func,
  podcast: PropTypes.object,
  history: PropTypes.object,
  params: PropTypes.shape({
    id: PropTypes.string,
    from: PropTypes.string,
  }),
};
const mapStateToProps = createStructuredSelector({
  podcast: selectPodcast(),
  history: selectHistory(),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(playActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Play);
