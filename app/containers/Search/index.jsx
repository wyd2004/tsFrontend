/* global COLOR_1 COLOR_3 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import rem from 'utils/pxtorem';
import selectSearchPage from './selectors';

import SearchBar from 'components/SearchBar';
import { Searched } from 'components/PodcastItem/style';
import Infinite from 'components/Infinite';
import PodcastItem from 'components/PodcastItem';

import { searchPodcast } from './actions';

const ResultBar = styled.p`
  color: ${COLOR_3};
  overflow: hidden;
  font-size: ${rem('12px')};
`;

const Total = styled.span`
  float: right;

  & span {
    color: ${COLOR_1};
  }
`;


export class SearchPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    onSearch: React.PropTypes.func,
    podcast: React.PropTypes.array,
    page: React.PropTypes.number,
    search: React.PropTypes.string,
  }
  constructor(props) {
    super(props);
    this.state = {
      searchValue: props.search,
    };
  }
  handleSearch = (value) => {
    this.props.onSearch(value);
    this.setState({
      searchValue: value,
    });
  }
  handleRefresh = () => {
    const { page, onSearch } = this.props;
    onSearch(this.state.searchValue, page);
  }
  render() {
    const { podcast, page } = this.props;
    const { searchValue } = this.state;
    return (
      <div>
        <Helmet
          title="搜索"
          meta={[
            { name: 'description', content: '糖蒜广播-搜索' },
          ]}
        />
        <SearchBar onSearch={this.handleSearch} />
        { podcast.length !== 0 && <ResultBar>以下是包含<Searched>{searchValue}</Searched>的节目<Total>共有<span>{podcast.length}</span>个节目</Total></ResultBar> }
        { page === null && podcast.length === 0 ? <div>没有搜索到相关节目</div> : null}
        <Infinite onRefresh={this.handleRefresh}>
          {podcast.map((item) => <PodcastItem {...item} searchValue={searchValue} key={item.id} />)}
        </Infinite>
      </div>
    );
  }
}

const mapStateToProps = selectSearchPage();

function mapDispatchToProps(dispatch) {
  return {
    onSearch: (content) => dispatch(searchPodcast(content)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
