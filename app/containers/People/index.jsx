/* global COLOR_1 COLOR_3 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';

import { selectProfile, selectPodcast } from './selectors';
import * as peopleActions from './actions';


import Card from 'components/Card';

import PodcastItem from 'components/PodcastItem';
import PeopleProfile from 'components/PeopleProfile';
import Infinite from 'components/Infinite';


export class People extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    const { params } = this.props;
    const { id } = params;
    this.props.loadPodcast(id);
    this.props.loadPeople(id);
  }
  handleRefresh = () => {
    const { podcast, params } = this.props;
    podcast.page !== null && this.props.loadPodcast(params.id, podcast.page);
  }
  render() {
    const { profile, podcast } = this.props;

    return (
      <div>
        <Helmet
          title="主播"
          meta={[
            { name: 'description', content: '糖蒜广播-主播' },
          ]}
        />
        <Card>
          <PeopleProfile {...profile} />
        </Card>
        <Infinite onRefresh={this.handleRefresh} scrollOnContainer >
          {podcast.results.map((item) => <PodcastItem {...item} key={item.id} />)}
        </Infinite>
      </div>
    );
  }
}
People.propTypes = {
  profile: React.PropTypes.object,
  podcast: React.PropTypes.object,
  params: React.PropTypes.object,
  loadPodcast: React.PropTypes.func,
  loadPeople: React.PropTypes.func,
};
const mapStateToProps = createStructuredSelector({
  profile: selectProfile(),
  podcast: selectPodcast(),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...peopleActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(People);
