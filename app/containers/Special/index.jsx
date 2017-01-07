/* global COLOR_1 COLOR_3 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { bindActionCreators } from 'redux';

import { loadInfo } from './actions';
import selectAblum from './selectors';

import Card from 'components/Card/CardWrapS';

import AlbumHeader from 'components/AlbumHeader';
import PodcastItem from 'components/PodcastItem';

class Special extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    const { info, params } = this.props;
    const { id } = params;
    !info && this.props.loadInfo(id);
  }
  render() {
    const { info, podcast } = this.props;
    const { results } = podcast;
    return (
      <div>
        <Helmet
          title="专辑列表"
          meta={[
            { name: 'description', content: '糖蒜广播-专辑列表' },
          ]}
        />
        <Card>
          { info && <AlbumHeader image={info.image} title={info.title} amount={info.amount} desc={info.desc} /> }
        </Card>
        {results.map((item) => <PodcastItem {...item} key={item.id} />) }
      </div>
    );
  }
}

Special.propTypes = {
  loadInfo: React.PropTypes.func,
  params: React.PropTypes.object,
  info: React.PropTypes.object,
  podcast: React.PropTypes.object,
};
const mapStateToProps = selectAblum();

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadInfo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Special);
