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


export class People extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    const { profile, podcast, params } = this.props;
    const { id } = params;
    podcast.length === 0 && this.props.loadPodcast(id);
    !profile && this.props.loadPeople(id);
  }
  render() {
    const { profile, podcast } = this.props;

    return (
      <div>
        <Helmet
          title="个人中心"
          meta={[
            { name: 'description', content: '糖蒜广播-个人中心' },
          ]}
        />
        <Card>
          <PeopleProfile {...profile} />
        </Card>
        {podcast.map((item) => <PodcastItem key={item.id} {...item} />)}
      </div>
    );
  }
}
People.propTypes = {
  profile: React.PropTypes.object,
  podcast: React.PropTypes.array,
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
