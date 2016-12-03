/* global COLOR_1 COLOR_3 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import selectSearchPage from './selectors';

import SearchBar from 'components/SearchBar';
import { Searched } from 'components/ListItem/style';

import { searchPodcast } from './actions';

const ResultBar = styled.p`
  color: ${COLOR_3};
  overflow: hidden;
  font-size: 12px;
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
  }
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
    };
  }
  handleSearch = (value) => {
    this.props.onSearch(value);
    this.setState({
      searchValue: value,
    });
  }
  render() {
    // const {resutls} = this.props;
    const results = [];
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
        { results.length !== 0 && <ResultBar>以下是包含<Searched>{searchValue}</Searched>的节目<Total>共有<span>{results.length}</span>个节目</Total></ResultBar> }
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
